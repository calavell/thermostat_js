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

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('.outsideTemp').text(data.main.temp)
      })
    })

    $.get("https://api.openweathermap.org/data/2.5/weather?q=london&appid=688628afe0bd824161b1dbff97ca97ba&units=metric", function(data) {
      $(".outsideTemp").text(data.main.temp);
    });



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
