'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("initializes with temperature of INITIAL_TEMPERATURE degress", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.INITIAL_TEMPERATURE);
  });

  describe("up", function () {
    it("increases the temperature by the inputted amount", function() {
      thermostat.up(2);
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.INITIAL_TEMPERATURE + 2);
    });

    it("will throw error if user tries to increase above 25 when in power saving mode", function() {
      thermostat.setPowerSavingOn();
      expect(function() {thermostat.up(7)} ).toThrowError(`Due to powersaving mode you cannot exceed ${thermostat.POWER_SAVING_UPPER_LIMIT} degrees!`);
    });
  });

  describe("down", function () {
    it("decreases the temperature by the inputted amount", function() {
      thermostat.down(2);
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.INITIAL_TEMPERATURE - 2);
    });
    it("throws an error if temp would be taken below minimum degrees", function() {
      expect(function() {thermostat.down(thermostat.INITIAL_TEMPERATURE - thermostat.MINIMUM_TEMPERATURE + 1)} ).toThrowError(`Minimum temperature is ${thermostat.MINIMUM_TEMPERATURE} degrees!`);
    });
  });

  describe("switchOnPowerSaving", function() {
    it("allows user to enter power saving mode", function() {
      thermostat.setPowerSavingOn();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
  });

});

// thermostat.POWER_SAVING_UPPER_LIMIT - thermostat.INITIAL_TEMPERATURE + 1
