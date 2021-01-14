'use strict';

class Thermostat {

  constructor() {
    this.INITIAL_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = false;
    this.POWER_SAVING_UPPER_LIMIT = 25;
    this.temperature = this.INITIAL_TEMPERATURE;
  }


  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  setPowerSavingOn() {
    this.powerSavingMode = true;
  }


  up() {
    if (this.isPowerSavingModeOn() === true && this.temperature === this.POWER_SAVING_UPPER_LIMIT) {
      throw new Error(`Due to powersaving mode you cannot exceed ${this.POWER_SAVING_UPPER_LIMIT} degrees!`);
    } else {
      this.temperature += 1;
    }
  }

  down() {
    if(this.temperature === this.MINIMUM_TEMPERATURE) {
      throw new Error(`Minimum temperature is ${this.MINIMUM_TEMPERATURE} degrees!`);
    } else {
      this.temperature -= 1;
    }
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }


}
