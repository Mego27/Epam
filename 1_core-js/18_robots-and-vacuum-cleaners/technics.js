function Device(power) {
  this.power = power;
  this.state = false;
}

Device.prototype = {
  on() {
    if (this.state) {
      return;
    }

    this.state = true;

    console.log('Set On');
  },
  off() {
    if (!this.state) {
      return;
    }

    this.state = false;

    console.log('Set Off');
  },
  showInfo() {
    if (!this.state) {
      return;
    }

    console.log(`Power - ${this.power}`);
  },
};

function VacuumCleaner() {
  Device.apply(this, arguments);
  this.mode = 'dry';
}

VacuumCleaner.prototype = Object.create(Device.prototype);
VacuumCleaner.prototype.constructor = VacuumCleaner;
VacuumCleaner.prototype.changeMode = function changeMode() {
  if (!this.state) {
    return;
  }

  if (this.mode === 'dry') {
    this.mode = 'wet';
  } else {
    this.mode = 'dry';
  }

  console.log(`Changed to ${this.mode}`);
};
VacuumCleaner.prototype.showInfo = function showInfo() {
  if (!this.state) {
    return;
  }

  const message = `Power - ${this.power}\nCurrent mode - ${this.mode}`;

  console.log(message);
};

function Robot() {
  Device.apply(this, arguments);
  this.map = null;
}

Robot.prototype = Object.create(Device.prototype);
Robot.prototype.constructor = Robot;
Robot.prototype.scanMap = function scanMap() {
  if (!this.state) {
    return;
  }
  this.map = 'some location';

  console.log('Scan map...');
};
Robot.prototype.showInfo = function showInfo() {
  if (!this.state) {
    return;
  }

  const mapInfo = this.map ? 'installed' : 'not installed';
  const message = `Power - ${this.power}\nMap - ${mapInfo}\nCurrent mode - ${this.mode}`;

  console.log(message);
};

function RobotCleaner() {
  VacuumCleaner.apply(this, arguments);
  this.map = null;
}

RobotCleaner.prototype = Object.create(VacuumCleaner.prototype);
RobotCleaner.prototype.constructor = RobotCleaner;
RobotCleaner.prototype.scanMap = function scanMap() {
  if (!this.state) {
    return;
  }

  this.map = 'some location';

  console.log('Scan map...');
};
RobotCleaner.prototype.showInfo = function showInfo() {
  if (!this.state) {
    return;
  }

  const mapInfo = this.map ? 'installed' : 'not installed';
  const message = `Power - ${this.power}\nMap - ${mapInfo}\nCurrent mode - ${this.mode}`;

  console.log(message);
};

function RobotSoldier() {
  Robot.apply(this, arguments);
  this.mode = 'not fire';
}

RobotSoldier.prototype = Object.create(Robot.prototype);
RobotSoldier.prototype.constructor = RobotSoldier;
RobotSoldier.prototype.fireOn = function fireOn() {
  if (!this.state) {
    return;
  }

  this.mode = 'fire';

  console.log('Robot fire');
};
RobotSoldier.prototype.fireOff = function fireOff() {
  if (!this.state) {
    return;
  }

  this.mode = 'not fire';

  console.log('Robot not fire');
};

const vacuumCleaner = new VacuumCleaner(10);
const robotCleaner = new RobotCleaner(20);
const robotSoldier = new RobotSoldier(30);
