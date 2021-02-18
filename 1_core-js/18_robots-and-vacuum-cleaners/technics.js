function Device(power) {
  this.power = power;
  this.state = false;
}

Device.prototype = {
  on() {
    if (!this.state) {
      this.state = true;

      console.log('Set On');
    }
  },
  off() {
    if (this.state) {
      this.state = false;

      console.log('Set Off');
    }
  },
  showInfo() {
    if (this.state) {
      console.log(`Power - ${this.power}`);
    }
  },
};

function VacuumCleaner(power) {
  Device.call(this, power);
  this.mode = 'dry';
}

VacuumCleaner.prototype = Object.create(Device.prototype, {
  changeMode: {
    value: function changeMode() {
      if (this.state) {
        if (this.mode === 'dry') {
          this.mode = 'wet';
        } else {
          this.mode = 'dry';
        }

        console.log(`Changed to ${this.mode}`);
      }
    },
  },

  showInfo: {
    value: function showInfo() {
      if (this.state) {
        console.log(`Power - ${this.power}\nCurrent mode - ${this.mode}`);
      }
    },
  },
});
VacuumCleaner.prototype.constructor = VacuumCleaner;

const vacuumCleaner = new VacuumCleaner(10);

function Robot(power) {
  Device.call(this, power);
  this.map = 'not installed';
}

Robot.prototype = Object.create(Device.prototype, {
  scanMap: {
    value: function scanMap() {
      if (this.state) {
        this.map = 'some location';

        console.log('Scan map...');
      }
    },
  },

  showInfo: {
    value: function showInfo() {
      if (this.state) {
        const message = `Power - ${this.power}\nMap - ${this.map}\nCurrent mode - ${this.mode}`;

        console.log(message);
      }
    },
  },
});

function RobotCleaner(power) {
  VacuumCleaner.call(this, power);
  this.map = 'not installed';
}

RobotCleaner.prototype = Object.create(VacuumCleaner.prototype, {
  scanMap: {
    value: function scanMap() {
      if (this.state) {
        this.map = 'some location';

        console.log('Scan map...');
      }
    },
  },

  showInfo: {
    value: function showInfo() {
      if (this.state) {
        const message = `Power - ${this.power}\nMap - ${this.map}\nCurrent mode - ${this.mode}`;

        console.log(message);
      }
    },
  },
});

const robotCleaner = new RobotCleaner(20);

function RobotSoldier(power) {
  Robot.call(this, power);
  this.mode = 'not fire';
}

RobotSoldier.prototype = Object.create(Robot.prototype, {
  fireOn: {
    value: function fireOn() {
      if (this.state) {
        this.mode = 'fire';

        console.log('Robot fire');
      }
    },
  },

  fireOff: {
    value: function fireOff() {
      if (this.state) {
        this.mode = 'not fire';

        console.log('Robot not fire');
      }
    },
  },
});

const robotSoldier = new RobotSoldier(30);
