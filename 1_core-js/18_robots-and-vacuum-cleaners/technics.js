function Device(power) {
  this.power = power;
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

const device = new Device(0);

function VacuumCleaner(power) {
  this.power = power;
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

const vacuumCleaner = new VacuumCleaner(10);

function Robot(power) {
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

const robot = new Robot(20);

function RobotCleaner(power) {
  this.power = power;
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

const robotCleaner = new RobotCleaner(20);

function RobotSoldier(power) {
  this.power = power
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

const robotSoldier = new RobotSoldier(30);
