function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arena = [];

class Warrior {
  constructor(name, arena) {
    this.name = name;
    this.healthPoints = getRandomIntInRange(10, 100);
    this.minAttackDamage = getRandomIntInRange(1, 20);
    this.maxAttackDamage = getRandomIntInRange(20, 40);
    this.isAttackMonster = false;

    arena.push(this);
  }

  attack(enemyName) {
    if (this.healthPoints <= 0) {
      const healthErrorMessage = `${this.name} погиб и не может совершать действия!`;

      console.log(healthErrorMessage);

      return;
    }

    const damage = getRandomIntInRange(this.minAttackDamage, this.maxAttackDamage);
    const enemy = arena.find((entry) => entry.name === enemyName);

    if (enemy !== undefined) {
      enemy.healthPoints -= damage;

      const amountOfDamageMessage = `${this.name} нанёс ${damage} урона ${enemyName}`;
      const remainingHealthMessage = `У ${enemyName} осталось ${enemy.healthPoints} единиц здоровья`;

      console.log(amountOfDamageMessage);
      console.log(remainingHealthMessage);

      if (enemy instanceof Monster) {
        this.isAttackMonster = true;

        enemy.attack(this, 'attack');
      }
    } else {
      const searchingErrorMessage = 'Такой цели не найдено!';

      console.log(searchingErrorMessage);
    }
  }
}

class Healer {
  constructor(name, arena) {
    this.name = name;
    this.healthPoints = getRandomIntInRange(10, 100);
    this.minHealingPower = getRandomIntInRange(1, 20);
    this.maxHealingPower = getRandomIntInRange(20, 40);

    arena.push(this);
  }

  heal(targetName) {
    if (this.healthPoints <= 0) {
      const healthErrorMessage = `${this.name} погиб и не может совершать действия!`;

      console.log(healthErrorMessage);

      return;
    }

    const healingPower = getRandomIntInRange(this.minHealingPower, this.maxHealingPower);
    const target = arena.find((entry) => entry.name === targetName);

    if (target !== undefined) {
      target.healthPoints += healingPower;

      const amountOfHealthMessage = `${this.name} вылечил на ${healingPower} единиц здоровья ${targetName}`;
      const remainingHealthMessage = `У ${targetName} стало ${target.healthPoints} единиц здоровья`;

      console.log(amountOfHealthMessage);
      console.log(remainingHealthMessage);

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
          const searchingMonstersErrorMessage = 'Живых монстров не осталось';

          console.log(searchingMonstersErrorMessage);
        }
      }
    } else {
      const searchingErrorMessage = 'Такой цели не найдено!';

      console.log(searchingErrorMessage);
    }
  }
}

class Monster {
  constructor(name, arena) {
    this.name = name;
    this.healthPoints = getRandomIntInRange(10, 100);
    this.minAttackDamage = getRandomIntInRange(1, 20);
    this.maxAttackDamage = getRandomIntInRange(20, 40);

    arena.push(this);
  }

  attack(target, actionOfTarget) {
    if (this.healthPoints <= 0) {
      const healthErrorMessage = `${this.name} погиб и не может совершать действия!`;

      console.log(healthErrorMessage);

      return;
    }

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

    const amountOfDamageMessage = `${this.name} нанёс ${damage} урона ${enemy.name}`;
    const remainingHealthMessage = `У ${enemy.name} осталось ${enemy.healthPoints} единиц здоровья`;

    console.log(amountOfDamageMessage);
    console.log(remainingHealthMessage);
  }
}

const warrior = new Warrior('warrior', arena);
const healer = new Healer('healer', arena);
const monster = new Monster('monster', arena);
