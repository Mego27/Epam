function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const arena = [];

class Entity {
  constructor(name, arena) {
    this.name = name;
    this.healthPoints = getRandomIntInRange(10, 100);
    this.minActionPower = getRandomIntInRange(1, 20);
    this.maxActionPower = getRandomIntInRange(20, 40);

    arena.push(this);
  }
}
class Warrior extends Entity {
  constructor(name, arena) {
    super(name, arena);
    this.type = 'warrior';
    this.isAttackMonster = false;
  }

  attack(enemyName) {
    if (this.healthPoints <= 0) {
      const healthErrorMessage = `${this.name} погиб и не может совершать действия!`;

      console.log(healthErrorMessage);

      return;
    }

    const enemy = arena.find((entry) => entry.name === enemyName);

    if (enemy === undefined) {
      const searchingErrorMessage = 'Такой цели не найдено!';

      console.log(searchingErrorMessage);

      return;
    }

    const damage = getRandomIntInRange(this.minActionPower, this.maxActionPower);

    enemy.healthPoints -= damage;

    const amountOfDamageMessage = `${this.name} нанёс ${damage} урона ${enemyName}`;
    const remainingHealthMessage = `У ${enemyName} осталось ${enemy.healthPoints} единиц здоровья`;

    console.log(amountOfDamageMessage);
    console.log(remainingHealthMessage);

    if (enemy.type === 'monster') {
      this.isAttackMonster = true;

      enemy.attack(this, 'attack');
    }
  }
}

class Healer extends Entity {
  constructor(name, arena) {
    super(name, arena);
    this.type = 'healer';
  }

  heal(targetName) {
    if (this.healthPoints <= 0) {
      const healthErrorMessage = `${this.name} погиб и не может совершать действия!`;

      console.log(healthErrorMessage);

      return;
    }

    const target = arena.find((entry) => entry.name === targetName);

    if (target === undefined) {
      const searchingErrorMessage = 'Такой цели не найдено!';

      console.log(searchingErrorMessage);

      return;
    }

    const healingPower = getRandomIntInRange(this.minActionPower, this.maxActionPower);

    target.healthPoints += healingPower;

    const amountOfHealthMessage = `${this.name} вылечил на ${healingPower} единиц здоровья ${targetName}`;
    const remainingHealthMessage = `У ${targetName} стало ${target.healthPoints} единиц здоровья`;

    console.log(amountOfHealthMessage);
    console.log(remainingHealthMessage);

    if (target.type === 'monster') {
      target.attack(this, 'heal');
    } else if (target.type === 'warrior' && target.isAttackMonster) {
      const monsters = arena
        .filter((entry) => (entry.type === 'monster') && (entry.healthPoints > 0));
      const randomMonsterIndex = getRandomIntInRange(0, monsters.length - 1);
      const monster = monsters[randomMonsterIndex];

      if (monster !== undefined) {
        monster.attack(this, 'healEnemy');
      } else {
        const searchingMonstersErrorMessage = 'Живых монстров не осталось';

        console.log(searchingMonstersErrorMessage);
      }
    }
  }
}

class Monster extends Entity {
  constructor(name, arena) {
    super(name, arena);
    this.type = 'monster';
  }

  attack(target, actionOfTarget) {
    if (this.healthPoints <= 0) {
      const healthErrorMessage = `${this.name} погиб и не может совершать действия!`;

      console.log(healthErrorMessage);

      return;
    }

    const damage = getRandomIntInRange(this.minActionPower, this.maxActionPower);

    let enemy;

    if (actionOfTarget === 'attack' || actionOfTarget === 'healEnemy') {
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
