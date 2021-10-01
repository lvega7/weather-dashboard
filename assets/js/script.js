var city = document.querySelector("#city")
var button = document.querySelector(".btn")
var cityNameDate = document.querySelector(".cityNameDate")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humid = document.querySelector(".humid")
var uv = document.querySelector(".uv")


// var weather = function() {
    // var apiURL = "api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}";
button.addEventListener('click', function(event){
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=732c0fa667469c7a58ce218262c96309'
      )
        .then(response => response.json()) 
        .then(data => {
            var cityNameDateValue = data['name'];
            var tempValue = data['main']['temp'];
            var windValue = data ['wind']['speed']
            var humidValue = data ['main']['humidity']

            cityNameDate.innerHTML = cityNameDateValue
            temp.innerHTML = tempValue
            wind.innerHTML = windValue
            humid.innerHTML = humidValue
            

        })


        event.preventDefault();
        
})

// button.addEventListener('click', function(event){
//     console.log(city.value)
//     event.preventDefault();
// })





        // .then(function(response){
        //     var showWeather = document.querySelector('#show-weather');

        //     var weatherImg = document.createElement('img');

        //     weatherImg.setAttribute('src', response.data.image_url);

        //     showWeather.appendChild(weatherImg);
        // });


    