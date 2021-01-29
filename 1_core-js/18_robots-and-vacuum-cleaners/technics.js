function Device() {
  this.power = 0;
  this.state = 'off';

  this.on = function on() {
    if (this.state === 'off') {
      this.state = 'on';

      console.log(`Set On`);
    }
  };

  this.off = function off() {
    if (this.state === 'on') {
      this.state = 'off';

      console.log(`Set Off`);
    }
  };

  this.showInfo = function showInfo() {
    if (this.state === 'on') {
      console.log(`Power - ${this.power}`);
    }
  };
}

const device = new Device();

function VacuumCleaner() {
  this.power = 10;
  this.mode = 'dry';

  this.changeMode = function changeMode() {
    if (this.state === 'on') {
      if (this.mode === 'dry') {
        this.mode = 'wet';
      } else {
        this.mode = 'dry';
      }

      console.log(`Changed to ${this.mode}`);
    }
  };

  this.showInfo = function showInfo() {
    if (this.state === 'on') {
      console.log(`Power - ${this.power}\nCurrent mode - ${this.mode}`);
    }
  };
}

VacuumCleaner.prototype = device;

const vacuumCleaner = new VacuumCleaner();

function Robot() {
  this.power = 20;
  this.map = '';

  this.scanMap = function scanMap() {
    if (this.state === 'on') {
      this.map = 'some location';

      console.log('Scan map...');
    }
  };

  this.showInfo = function showInfo() {
    if (this.state === 'on') {
      const haveMap = this.map !== '';

      console.log(`Power - ${this.power}\nHave map - ${haveMap}\nCurrent mode - ${this.mode}`);
    }
  };
}

Robot.prototype = device;

const robot = new Robot();

function RobotCleaner() {
  this.power = 20;
  this.map = '';

  this.scanMap = function scanMap() {
    if (this.state === 'on') {
      this.map = 'some location';

      console.log('Scan map...');
    }
  };

  this.showInfo = function showInfo() {
    if (this.state === 'on') {
      const haveMap = this.map !== '';

      console.log(`Power - ${this.power}\nHave map - ${haveMap}\nCurrent mode - ${this.mode}`);
    }
  };
}

RobotCleaner.prototype = vacuumCleaner;

function RobotSoldier() {
  this.mode = 'not fire';

  this.fireOn = function fireOn() {
    if (this.state === 'on') {
      this.mode = 'fire';

      console.log(`Robot fire`);
    }
  };

  this.fireOff = function fireOff() {
    if (this.state === 'on') {
      this.mode = 'not fire';

      console.log(`Robot not fire`);
    }
  };
}

RobotSoldier.prototype = robot;

const robotSoldier = new RobotSoldier();
