$(document).ready(function() {
  var thermostat = new Thermostat();
    $('.temp').html(thermostat.temperature);
    $('.esl').html(thermostat.currentUsage());
    $('.psm').html(thermostat.powerSavingMode);

    $('#temperature-up').on('click', function (){
      thermostat.up();
      updateTemperature();
      updateUsage();
    })

    $('#temperature-down').on('click', function (){
      thermostat.down();
      updateTemperature();
      updateUsage();
    })

    $('#reset-temperature').on('click', function (){
      thermostat.resetTemperature();
      updateTemperature();
      updateUsage();
    })

    $('#powersaving-on').on('click', function (){
      toggleImage();
      thermostat.setPowerSavingOn();
      togglePsmButton();
      updatePowerSavingMode();
    })

    $('#powersaving-off').on('click', function (){
      toggleImage();
      thermostat.switchPowerSavingOff();
      togglePsmButton();
      updatePowerSavingMode();
    })



    function updateTemperature() {
      $('.temp').html(thermostat.temperature);
      $('.temp').attr('id', thermostat.currentUsage());
    }

    function updatePowerSavingMode() {
      $('.psm').html(thermostat.powerSavingMode);
    }

    function updateUsage() {
      $('.esl').html(thermostat.currentUsage());
    }

    function toggleImage() {
      $('.pics').toggle();
    }

    function togglePsmButton() {
      $('.psmButton').toggle();
    }
})
