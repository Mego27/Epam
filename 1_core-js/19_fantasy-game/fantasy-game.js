function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Warrior(name, arena) {
  this.name = name;
  this.healthPoints = getRandomIntInRange(10, 100);
  this.minAttackDamage = getRandomIntInRange(1, 20);
  this.maxAttackDamage = getRandomIntInRange(20, 40);
  this.isAttackMonster = false;

  this.attack = function attack(enemyName) {
    if (this.healthPoints > 0) {
      const damage = getRandomIntInRange(this.minAttackDamage, this.maxAttackDamage);
      const enemy = arena.find((entry) => entry.name === enemyName);

      if (enemy !== undefined) {
        enemy.healthPoints -= damage;

        console.log(`${this.name} нанёс ${damage} урона ${enemyName}`);
        console.log(`У ${enemyName} осталось ${enemy.healthPoints} единиц здоровья`);

        if (enemy instanceof Monster) {
          this.isAttackMonster = true;

          enemy.attack(this, 'attack');
        }
      } else {
        console.log('Такой цели не найдено!');
      }
    } else {
      console.log(`${this.name} погиб и не может совершать действия!`);
    }
  };

  arena.push(this);
}

function Healer(name, arena) {
  this.name = name;
  this.healthPoints = getRandomIntInRange(10, 100);
  this.minHealingPower = getRandomIntInRange(1, 20);
  this.maxHealingPower = getRandomIntInRange(20, 40);

  this.heal = function heal(targetName) {
    if (this.healthPoints > 0) {
      const healingPower = getRandomIntInRange(this.minHealingPower, this.maxHealingPower);
      const target = arena.find((entry) => entry.name === targetName);

      if (target !== undefined) {
        target.healthPoints += healingPower;

        console.log(`${this.name} вылечил на ${healingPower} единиц здоровья ${targetName}`);
        console.log(`У ${targetName} стало ${target.healthPoints} единиц здоровья`);

        if (target instanceof Monster) {
          target.attack(this, 'heal');
        } else if ((target instanceof Warrior) && target.isAttackMonster) {
          const monsters = arena
            .filter((entry) => (entry instanceof Monster) && (entry.healthPoints > 0));
          const randomMonsterIndex = getRandomIntInRange(0, monsters.length - 1);
          const monster = monsters[randomMonsterIndex];

          if (monster !== undefined) {
            monster.attack(this, 'healEnemy');
          } else {
            console.log('Живых монстров не осталось');
          }
        }
      } else {
        console.log('Такой цели не найдено!');
      }
    } else {
      console.log(`${this.name} погиб и не может совершать действия!`);
    }
  };

  arena.push(this);
}

function Monster(name, arena) {
  this.name = name;
  this.healthPoints = getRandomIntInRange(10, 100);
  this.minAttackDamage = getRandomIntInRange(1, 20);
  this.maxAttackDamage = getRandomIntInRange(20, 40);

  this.attack = function attack(target, actionOfTarget) {
    if (this.healthPoints > 0) {
      const damage = getRandomIntInRange(this.minAttackDamage, this.maxAttackDamage);

      let enemy;

      if ((actionOfTarget === 'attack') || (actionOfTarget === 'healEnemy')) {
        enemy = target;
      } else {
        const aviableToAttackEntries = arena
          .filter((entry) => (entry !== this) && (entry !== target));
        const randomEnemyIndex = getRandomIntInRange(0, aviableToAttackEntries.length - 1);

        enemy = arena[randomEnemyIndex];
      }

      enemy.healthPoints -= damage;

      console.log(`${this.name} нанёс ${damage} урона ${enemy.name}`);
      console.log(`У ${enemy.name} осталось ${enemy.healthPoints} единиц здоровья`);
    } else {
      console.log(`${this.name} погиб и не может совершать действия!`);
    }
  };

  arena.push(this);
}

const arena = [];
const warrior = new Warrior('warrior', arena);
const healer = new Healer('healer', arena);
const monster = new Monster('monster', arena);
