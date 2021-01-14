'use strict';

class Thermostat {

  constructor() {
    this.INITIAL_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = "on";
    this.POWER_SAVING_UPPER_LIMIT = 25;
    this.UPPER_LIMIT = 32;
    this.temperature = this.INITIAL_TEMPERATURE; 20
  }


  isPowerSavingModeOn() {
    return this.powerSavingMode === "on";
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  setPowerSavingOn() {
    this.powerSavingMode = "on";
  }


  up() {
    if (this.isPowerSavingModeOn() === true && this.isMaximumTemperature() === true) {
      throw new Error(`Due to powersaving mode you cannot exceed ${this.POWER_SAVING_UPPER_LIMIT} degrees!`);
    } else if (this.isPowerSavingModeOn() === false && this.temperature === this.UPPER_LIMIT) {
      throw new Error(`You cannot exceed ${this.UPPER_LIMIT} degrees!`);
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

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn()){
      return this.temperature === this.POWER_SAVING_UPPER_LIMIT;
    }
      return this.temperature === this.UPPER_LIMIT;
  }

  switchPowerSavingOff() {
    this.powerSavingMode = "off";
  }
  currentUsage() {
    if (this.temperature < 18) {
      return "Low-usage"
    }else if (this.temperature <= 25) {
      return "Medium-usage"
    } else {
      return "High-usage"
    }
  }

  resetTemperature() {
    this.temperature = this.INITIAL_TEMPERATURE;
  }

}
