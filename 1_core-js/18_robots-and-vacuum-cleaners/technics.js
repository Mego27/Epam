const device = {
  power: 0,
  state: 'off',

  on() {
    if (this.state === 'off') {
      this.state = 'on';

      console.log(`Set On`);
    }
  },

  off() {
    if (this.state === 'on') {
      this.state = 'off';

      console.log(`Set Off`);
    }
  },

  showInfo() {
    if (this.state === 'on') {
      console.log(`Power - ${this.power}`);
    }
  },
};

const vacuumCleaner = {
  power: 10,
  mode: 'dry',

  changeMode() {
    if (this.state === 'on') {
      if (this.mode === 'dry') {
        this.mode = 'wet';
      } else {
        this.mode = 'dry';
      }

      console.log(`Changed to ${this.mode}`);
    }
  },

  showInfo() {
    if (this.state === 'on') {
      console.log(`Power - ${this.power}\nCurrent mode - ${this.mode}`);
    }
  },
};
Object.setPrototypeOf(vacuumCleaner, device);

const robot = {
  power: 20,
  map: '',

  scanMap() {
    if (this.state === 'on') {
      this.map = 'some location';

      console.log('Scan map...');
    }
  },

  showInfo() {
    if (this.state === 'on') {
      const haveMap = this.map !== '';

      console.log(`Power - ${this.power}\nHave map - ${haveMap}\nCurrent mode - ${this.mode}`);
    }
  },
};
Object.setPrototypeOf(robot, device);

const robotSoldier = {
  mode: 'not fire',

  fireOn() {
    if (this.state === 'on') {
      this.mode = 'fire';

      console.log(`Robot fire`);
    }
  },

  fireOff() {
    if (this.state === 'on') {
      this.mode = 'not fire';

      console.log(`Robot not fire`);
    }
  },
};
Object.setPrototypeOf(robotSoldier, robot);

const robotCleaner = {
  power: 20,
  map: '',

  scanMap() {
    if (this.state === 'on') {
      this.map = 'some location';

      console.log('Scan map...');
    }
  },

  showInfo() {
    if (this.state === 'on') {
      const haveMap = this.map !== '';

      console.log(`Power - ${this.power}\nHave map - ${haveMap}\nCurrent mode - ${this.mode}`);
    }
  },
};
Object.setPrototypeOf(robotCleaner, vacuumCleaner);
