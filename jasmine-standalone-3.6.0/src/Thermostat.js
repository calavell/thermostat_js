'use strict';

class Thermostat {

  constructor() {
    this.INITIAL_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    
    this.temperature = this.INITIAL_TEMPERATURE;
  }

  currentTemperature() {
    return this.temperature;
  }

  up(amount) {
    this.temperature += amount;
  }

  down(amount) {
    if(this.temperature - amount < this.MINIMUM_TEMPERATURE) {
      throw new Error(`Minimum temperature is ${this.MINIMUM_TEMPERATURE} degrees!`);
    } else {
      this.temperature -= amount;
    }

  }

}
