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
      thermostat.setPowerSavingOn();
      updatePowerSavingMode();
    })

    $('#powersaving-off').on('click', function (){
      thermostat.switchPowerSavingOff();
      updatePowerSavingMode();
    })

    // let getReturnValue = $.get("https://api.openweathermap.org/data/2.5/weather?q=london&appid=9ec9591a31e3be7446a43513c920d793", (weather) => {
    //   weather.forEach((item) => console.log(item));
    // })
    // console.log(getReturnValue.weather);
    //
    // const apiRes = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=9ec9591a31e3be7446a43513c920d793` ); 




    function updateTemperature() {
      $('.temp').html(thermostat.temperature);
    }

    function updatePowerSavingMode() {
      $('.psm').html(thermostat.powerSavingMode);
    }

    function updateUsage() {
      $('.esl').html(thermostat.currentUsage());
    }
})
