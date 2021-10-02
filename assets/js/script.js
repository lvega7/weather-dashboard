var city = document.querySelector("#city")
var button = document.querySelector(".btn")
var cityNameDate = document.querySelector(".cityNameDate")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humid = document.querySelector(".humid")
var uv = document.querySelector(".uv")


button.addEventListener('click', function(event){
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=732c0fa667469c7a58ce218262c96309'
      )
    //   fetch (
        // 'https://api.openweathermap.org/data/2.5/onecall?lat=32.7153&lon=-117.1573&exclude={part}&appid=732c0fa667469c7a58ce218262c96309')

        .then(response => response.json()) 
        .then(data => {
            var cityNameDateValue = data['name'];
            var tempValue = data['main']['temp'];
            var windValue = data ['wind']['speed']
            var humidValue = data ['main']['humidity']

            cityNameDate.innerHTML = cityNameDateValue
            temp.innerHTML = "Temp: "+ tempValue
            wind.innerHTML = "Wind: "+ windValue+ "mph"
            humid.innerHTML = "Humidity: "+humidValue + "%"
            
            console.log(data)
            fiveDayForecast();

        })
   


        event.preventDefault();
        
})


// var fiveDayForecast = function(){


//     fetch (
//         'https://api.openweathermap.org/data/2.5/onecall?lat=32.7153&lon=-117.1573&exclude={part}&appid=732c0fa667469c7a58ce218262c96309')

//         .then(response => response.json()) 
//         .then(data => console.log(data))

//     }

