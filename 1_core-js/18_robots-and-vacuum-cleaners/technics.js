function Device() {
  this.power = 0;
  this.state = false;

  this.on = function on() {
    if (!this.state) {
      this.state = true;

      console.log('Set On');
    }
  };

  this.off = function off() {
    if (this.state) {
      this.state = false;

      console.log('Set Off');
    }
  };

  this.showInfo = function showInfo() {
    if (this.state) {
      console.log(`Power - ${this.power}`);
    }
  };
}

const device = new Device();

function VacuumCleaner() {
  this.power = 10;
  this.mode = 'dry';

  this.changeMode = function changeMode() {
    if (this.state) {
      if (this.mode === 'dry') {
        this.mode = 'wet';
      } else {
        this.mode = 'dry';
      }

      console.log(`Changed to ${this.mode}`);
    }
  };

  this.showInfo = function showInfo() {
    if (this.state) {
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
    if (this.state) {
      this.map = 'some location';

      console.log('Scan map...');
    }
  };

  this.showInfo = function showInfo() {
    if (this.state) {
      const map = this.map || 'not installed';
      const message = `Power - ${this.power}\nMap - ${map}\nCurrent mode - ${this.mode}`;

      console.log(message);
    }
  };
}

Robot.prototype = device;

const robot = new Robot();

function RobotCleaner() {
  this.power = 20;
  this.map = '';

  this.scanMap = function scanMap() {
    if (this.state) {
      this.map = 'some location';

      console.log('Scan map...');
    }
  };

  this.showInfo = function showInfo() {
    if (this.state) {
      const map = this.map || 'not installed';
      const message = `Power - ${this.power}\nMap - ${map}\nCurrent mode - ${this.mode}`;

      console.log(message);
    }
  };
}

RobotCleaner.prototype = vacuumCleaner;

const robotCleaner = new RobotCleaner();

function RobotSoldier() {
  this.mode = 'not fire';

  this.fireOn = function fireOn() {
    if (this.state) {
      this.mode = 'fire';

      console.log('Robot fire');
    }
  };

  this.fireOff = function fireOff() {
    if (this.state) {
      this.mode = 'not fire';

      console.log('Robot not fire');
    }
  };
}

RobotSoldier.prototype = robot;

const robotSoldier = new RobotSoldier();
