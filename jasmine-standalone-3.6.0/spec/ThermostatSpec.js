'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("initializes with temperature of 20 degress", function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  describe("up", function () {
    it("increases the temperature by the inputted amount", function() {
      thermostat.up(2);
      expect(thermostat.currentTemperature()).toEqual(22);
    });
  });

  describe("down", function () {
    it("decreases the temperature by the inputted amount", function() {
      thermostat.down(2);
      expect(thermostat.currentTemperature()).toEqual(18);
    });
    it("throws an error if temp would be taken below 10 degrees", function() {
      expect(function() {thermostat.down(11)} ).toThrowError("Minimum temperature is 10 degrees!");
    });
  });

});
