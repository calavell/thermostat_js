'use strict';

class Thermostat {

  constructor() {
    this.temperature = 20;
  }

  currentTemperature() {
    return this.temperature;
  }

  up(amount) {
    this.temperature += amount;
  }

  down(amount) {
    if(this.temperature - amount < 10) {
      throw new Error("Minimum temperature is 10 degrees!");
    } else {
      this.temperature -= amount;
    }

  }

}
