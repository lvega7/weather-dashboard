var city = document.querySelector("#city")
var button = document.querySelector(".btn")
var cityNameDate = document.querySelector(".cityNameDate")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humid = document.querySelector(".humid")
var uv = document.querySelector(".uv")
var lat = document.querySelector(".lat")
var lon = document.querySelector(".lon")
var temp2 = document.querySelector(".temp2")
var date = document.querySelector(".date")

// loop to show 5-day dates
var day = moment ().format('l');
for (let i = 0; i < 5; i++) {
    var multDays = moment().add(i, 'days').calendar('l');
    console.log(multDays )
    
}


// button to show the current weather
button.addEventListener('click', function(event){
    // fetch today's forecast
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=imperial&appid=732c0fa667469c7a58ce218262c96309'
      )
      
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
            date.textContent= (day)
            var latValue = data['coord']['lat']
            var lonValue = data['coord']['lon']
            
            console.log(data)
            // fetch the 5 day forecast
            fetch (
                'https://api.openweathermap.org/data/2.5/onecall?lat='+latValue+'&lon='+lonValue+'&units=imperial&exclude={part}&appid=732c0fa667469c7a58ce218262c96309')
                .then(response => response.json()) 
                .then(data =>{
                    var temp2Value = data ['daily'][0]['temp']['day'] 
                    // var time = data ['timezone_offset'+1000]
                    

                    temp2.innerHTML = temp2Value
                    console.log(data)
                    
                    
                })
                
                

            // lat.innerHTML = latValue
            // lon.innerHTML = lonValue

        })
   

        // stops it from refreshing 
        event.preventDefault();
        
})


