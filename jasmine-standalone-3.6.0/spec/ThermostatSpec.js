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
    it("increases the temperature by 1", function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.INITIAL_TEMPERATURE + 1);
    });

    it("will throw error if user tries to increase above 25 when in power saving mode", function () {
      
      thermostat.setPowerSavingOn();
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function() {thermostat.up()} ).toThrowError(`Due to powersaving mode you cannot exceed ${thermostat.POWER_SAVING_UPPER_LIMIT} degrees!`);
    });

    it("will throw error if user tries to increase above 32 when not in powersaving mode", function () {
      thermostat.switchPowerSavingOff()
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      console.log(thermostat.isPowerSavingModeOn());
      expect(function() {thermostat.up()} ).toThrowError(`You cannot exceed ${thermostat.UPPER_LIMIT} degrees!`);
    });
  });

  describe("down", function () {
    it("decreases the temperature by 1", function() {
        thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it("throws an error if temp would be taken below minimum degrees", function() {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(function() {thermostat.down()} ).toThrowError(`Minimum temperature is ${thermostat.MINIMUM_TEMPERATURE} degrees!`);
    });
  });

  describe("switchOnPowerSaving", function () {
    it("allows user to enter power saving mode", function() {
      thermostat.setPowerSavingOn();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
  });
  describe("isPowerSavingModeOn", function () {
    it("is on by default", function () {
      
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
  });
});

// thermostat.POWER_SAVING_UPPER_LIMIT - thermostat.INITIAL_TEMPERATURE + 1
