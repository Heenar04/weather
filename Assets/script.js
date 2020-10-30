$(document).ready(function () {

    $(document).on("click", ".city-btn",function(){
    
       var cityBtnText = $(this).text();
       weatherSearch(cityBtnText);
    
    
    
    
    
    
    })
    
        $(".bi").on("click", function (e) {
            var userInput = $("#userInput");
            userInput = userInput.val();
            weatherSearch(userInput);
        });
        function weatherSearch(userInput){
            // e.preventDefault();
           
    
            var apiKey = "e19990f9d202f8a74411dd3d6c84c336"
    
            var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput +
                "&appid=e19990f9d202f8a74411dd3d6c84c336&units=imperial";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var currentDate = moment().format("L")
                console.log(currentDate)
                var city = response.name;
                var icon = response.weather[0].icon;
                $("#city").text("City : " + city )
    $("#currentDate").text(currentDate)
                var temperature = response.main.temp;
    
                $("#temperature").text("Temperature :" + temperature)
                // $("#cityName").append($("#temperature"))
    
                var humidity = response.main.humidity;
    
                $("#humidity").text("Himidity :" + humidity)
                // $("#cityName").append($("#humi dity"))
    
                // var ptemp =$("<p>")
                var feels = response.main.feels_like;
    
                $("#feelsLike").text("Feels Like :" + feels)
                // $("#cityName").append($("#feels like"))
    
                var wind = response.wind.speed;
    
                $("#windSpeed").text("Wind Speed :" + wind)
                $("#cityName").append($("#wind Speed"))
    
    
            // var forecast = $("#forecast");
            // forecast = forecast.val();
            });
    
            forecast(userInput);
        };
    
    
    function forecast(userInput){
            // var CastapiKey ="1459cf4cab56ffe3d017fd59b5742bc3";
            // var userClcik =$("#forcast-day")
            var CAqueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
            userInput + "&appid=e19990f9d202f8a74411dd3d6c84c336";
    ($.ajax)({
                url: CAqueryURL,
                method: "GET"
            
            }).then(function (response) {
                // console.log(response);
                $("#forecast").empty()
    
    for (var i=0 ; i<response.list.length;i++){
       
        if (response.list[i].dt_txt.endsWith("12:00:00")){
            console.log(response.list[i])
            var col = $('<div class="col-md-2">');
            col.append(response.list[i].dt_txt);
            $("#forecast").append(col)
    
        }
    }
    
    
    
            })
        }
    
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
    
    
    
    