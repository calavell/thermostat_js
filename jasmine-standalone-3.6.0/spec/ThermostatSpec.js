'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("initializes with temperature of INITIAL_TEMPERATURE degress", function() {
    expect(thermostat.currentTemperature()).toEqual(thermostat.INITIAL_TEMPERATURE);
  });

  describe("up", function () {
    it("increases the temperature by the inputted amount", function() {
      thermostat.up(2);
      expect(thermostat.currentTemperature()).toEqual(thermostat.INITIAL_TEMPERATURE + 2);
    });
  });

  describe("down", function () {
    it("decreases the temperature by the inputted amount", function() {
      thermostat.down(2);
      expect(thermostat.currentTemperature()).toEqual(thermostat.INITIAL_TEMPERATURE - 2);
    });
    it("throws an error if temp would be taken below 10 degrees", function() {
      expect(function() {thermostat.down(thermostat.INITIAL_TEMPERATURE - thermostat.MINIMUM_TEMPERATURE + 1)} ).toThrowError("Minimum temperature is 10 degrees!");
    });
  });

});
