'use strict';

class Thermostat {

  constructor() {
    this.INITIAL_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = false;
    this.POWER_SAVING_UPPER_LIMIT = 25;
    this.temperature = this.INITIAL_TEMPERATURE;
  }

  currentTemperature() {
    return this.temperature;
  }

  up(amount) {
    if (this.powerSavingMode === true && amount + this.temperature > this.POWER_SAVING_UPPER_LIMIT) {
      throw new Error(`Due to powersaving mode you cannot exceed ${this.POWER_SAVING_UPPER_LIMIT} degrees!`);
    } else {
      this.temperature += amount;
    }
  }

  down(amount) {
    if(this.temperature - amount < this.MINIMUM_TEMPERATURE) {
      throw new Error(`Minimum temperature is ${this.MINIMUM_TEMPERATURE} degrees!`);
    } else {
      this.temperature -= amount;
    }
  }

  switchOnPowerSaving() {
    this.powerSavingMode = true;
  }

}
