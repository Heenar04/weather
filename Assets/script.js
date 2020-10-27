$(document).ready(function () {


    $("button").on("click", function (e) {
        e.preventDefault();
        var userInput = $("#userInput");
        userInput = userInput.val();

        var apiKey = "e19990f9d202f8a74411dd3d6c84c336"

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput +
            "&appid=e19990f9d202f8a74411dd3d6c84c336&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var city = response.name;
            var icon = response.weather[0].icon;
            $("#city").text("City : " + city)
            $("#cityName").append($("#ci ty"))

            var temperature = response.main.temp;

            $("#temperature").text("Temperature :" + temperature)
            $("#cityName").append($("#temper ature"))

            var humidity = response.main.humidity;

            $("#humidity").text("Himidity :" + humidity)
            $("#cityName").append($("#humi dity"))

            // var ptemp =$("<p>")
            var feels = response.main.feels_like;

            $("#feelsLike").text("Feels Like :" + feels)
            $("#cityName").append($("#feels like"))

            var wind = response.wind.speed;

            $("#windSpeed").text("Wind Speed :" + wind)
            $("#cityName").append($("#wind Speed"))


            var forecast = $("#forecast");
        forecast = forecast.val();




        // var CastapiKey ="1459cf4cab56ffe3d017fd59b5742bc3";
        var userClcik =$("#forcast-day")
        var CAqueryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        forecast + "&appid=31f72f5bc0accc19be6a4d47df1ef81e&cnt=5";

        $.ajax({
            url: CAqueryURL,
            method: "GET"
        
        }).then(function (response) {
            console.log();





        })
    })


    })
})
//document .ready
//search button on click
//inside
//store value of search in a variable
//run a funciton for searching the weather

//store history
//on click in the list of history that run the function for searching the weather


//function for searching weather
//ajax call
//see above code
// if statement push search value into history store in locab storage
// can call a function that runs list items of history onto html
//create html elements for the current weather
// create an html for forcast the weather of the current city 
// call to 5 days from current date 



