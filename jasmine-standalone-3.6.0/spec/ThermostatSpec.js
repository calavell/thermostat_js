describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("initializes with temperature of 20 degress", function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  describe("up method", function () {
    it("increases the temperature by the inputted amount", function() {
      thermostat.up(2);
      expect(thermostat.currentTemperature()).toEqual(22);
    });
  });
});
