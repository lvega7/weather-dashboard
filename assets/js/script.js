var city = document.querySelector("#city")
var button = document.querySelector(".btn")
var cityNameDate = document.querySelector(".cityNameDate")
var temp = document.querySelector(".temp")
var wind = document.querySelector(".wind")
var humid = document.querySelector(".humid")
var uv = document.querySelector(".uv")
var lat = document.querySelector(".lat")
var lon = document.querySelector(".lon")
var temp1 = document.querySelector(".temp1")
var temp2 = document.querySelector(".temp2")
var temp3 = document.querySelector(".temp3")
var temp4 = document.querySelector(".temp4")
var temp5 = document.querySelector(".temp5")
var date = document.querySelector(".date")
var day1 = document.querySelector(".day1")
var day2 = document.querySelector(".day2")
var day3 = document.querySelector(".day3")
var day4 = document.querySelector(".day4")
var day5 = document.querySelector(".day5")

// current date
var day = moment ().format('l');

// loop to show 5-day dates
// for (let i = 0; i < 5; i++) {
//     var multDays = moment().add(i, 'days').calendar('l');
//     console.log(JSON.stringify({multDays}))
    
// }

var day1date= moment().add(1, 'days').calendar('l');
    day1.innerHTML = day1date

var day2date= moment().add(2, 'days').calendar('l');
    day2.innerHTML = day2date

var day3date= moment().add(3, 'days').calendar('l');
    day3.innerHTML = day3date

var day4date= moment().add(4, 'days').calendar('l');
    day4.innerHTML = day4date

var day5date= moment().add(5, 'days').calendar('l');
    day5.innerHTML = day5date




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

            cityNameDate.innerHTML = cityNameDateValue + " " + day
            temp.innerHTML = "Temp: "+ tempValue + "°F"
            wind.innerHTML = "Wind: "+ windValue+ "mph"
            humid.innerHTML = "Humidity: "+humidValue + "%"
            
            var latValue = data['coord']['lat']
            var lonValue = data['coord']['lon']
            
            console.log(data)
            // fetch the 5 day forecast
            fetch (
                'https://api.openweathermap.org/data/2.5/onecall?lat='+latValue+'&lon='+lonValue+'&units=imperial&exclude={part}&appid=732c0fa667469c7a58ce218262c96309')
                .then(response => response.json()) 
                .then(data =>{
                    var temp1Value = data ['daily'][1]['temp']['day'] 
                    var temp2Value = data ['daily'][2]['temp']['day'] 
                    var temp3Value = data ['daily'][3]['temp']['day'] 
                    var temp4Value = data ['daily'][4]['temp']['day'] 
                    var temp5Value = data ['daily'][5]['temp']['day'] 
                    
                    

                    temp1.innerHTML = temp1Value
                    temp2.innerHTML = temp2Value
                    temp3.innerHTML = temp3Value
                    temp4.innerHTML = temp4Value
                    temp5.innerHTML = temp5Value
                    console.log(data)

                    // for (let i = 1; i < 6; i++) {
                    //     var forecast = data ['daily'][i]['wind_speed']
                    //     console.log(forecast)
                        
                    // }

                    var wind1 = data ['daily'][1]['wind_speed']+ "mph"
                    var wind2 = data ['daily'][2]['wind_speed']+ "mph"
                    var wind3 = data ['daily'][3]['wind_speed']+ "mph"
                    var wind4 = data ['daily'][4]['wind_speed']+ "mph"
                    var wind5 = data ['daily'][5]['wind_speed']+ "mph"

                    


                    
                    
                })
                
                

            // lat.innerHTML = latValue
            // lon.innerHTML = lonValue

        })
   

        // stops it from refreshing 
        event.preventDefault();
        
})


