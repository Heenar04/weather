$(document).ready(function(){

   
    $("button").on("click", function (e) {
        e.preventDefault();
        var userInput = $("#userInput");
        userInput = userInput.val();
        // var searchEL = "London"

        var apiKey = "e19990f9d202f8a74411dd3d6c84c336"

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput +
            "&appid=e19990f9d202f8a74411dd3d6c84c336&units=imperial";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var temp = response.main.temp;
            
            var humid = response.main.humidity;

            $("#temperature").text(temp)
            $("#cityName").append($("#temperature"))
            // var ptemp =$("<p>")
            $("humidity").text(humid)
            $("#cityName").append($("#humidity"))

            
        })
    })
});
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


