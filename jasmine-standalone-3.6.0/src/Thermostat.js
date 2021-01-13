

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
}
