$(document).ready(function() {
  var thermostat = new Thermostat();
    $('.temp').html(thermostat.temperature);
    $('.esl').html(thermostat.currentUsage());
    $('.psm').html(thermostat.powerSavingMode);
})