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
//     lon.innerHTML= multDays
//     console.log(multDays)
    
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
           
            // var uvValue = data['daily']['uvi']

            cityNameDate.innerHTML = cityNameDateValue + " " + day 
            temp.innerHTML = "Temp: "+ tempValue + "°F"
            wind.innerHTML = "Wind: "+ windValue+ "mph"
            humid.innerHTML = "Humidity: "+humidValue + "%"
            // uv.innerHTML = uvValue
            
            var latValue = data['coord']['lat']
            var lonValue = data['coord']['lon']
            
            console.log(data)
            console.log(city.value)
            // fetch the 5 day forecast
            fetch (
                'https://api.openweathermap.org/data/2.5/onecall?lat='+latValue+'&lon='+lonValue+'&units=imperial&exclude={part}&appid=732c0fa667469c7a58ce218262c96309')
                .then(response => response.json()) 
                .then(data =>{
                    var temp1Value ="Temp:"+data ['daily'][1]['temp']['day'] 
                    var temp2Value ="Temp:"+data ['daily'][2]['temp']['day'] 
                    var temp3Value ="Temp:"+data ['daily'][3]['temp']['day'] 
                    var temp4Value ="Temp:"+data ['daily'][4]['temp']['day'] 
                    var temp5Value ="Temp:"+data ['daily'][5]['temp']['day'] 
                    
                    

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

                    // wind forecast
                    var wind1 = document.querySelector(".wind1")
                    var wind2 = document.querySelector(".wind2")
                    var wind3 = document.querySelector(".wind3")
                    var wind4 = document.querySelector(".wind4")
                    var wind5 = document.querySelector(".wind5")

                    var wind1value ="Wind:"+data ['daily'][1]['wind_speed']+ "mph"
                    var wind2value ="Wind:"+data ['daily'][2]['wind_speed']+ "mph"
                    var wind3value ="Wind:"+data ['daily'][3]['wind_speed']+ "mph"
                    var wind4value ="Wind:"+data ['daily'][4]['wind_speed']+ "mph"
                    var wind5value ="Wind:"+data ['daily'][5]['wind_speed']+ "mph"

                    wind1.innerHTML=wind1value
                    wind2.innerHTML=wind2value
                    wind3.innerHTML=wind3value
                    wind4.innerHTML=wind4value
                    wind5.innerHTML= wind5value  

                    // humidity forecast
                    var humid1 = document.querySelector(".humid1")
                    var humid2 = document.querySelector(".humid2")
                    var humid3 = document.querySelector(".humid3")
                    var humid4 = document.querySelector(".humid4")
                    var humid5 = document.querySelector(".humid5")

                    var humid1value ="Humidity:"+data ['daily'][1]['humidity']+ "%"
                    var humid2value ="Humidity:"+data ['daily'][2]['humidity']+ "%"
                    var humid3value ="Humidity:"+data ['daily'][3]['humidity']+ "%"
                    var humid4value ="Humidity:"+data ['daily'][4]['humidity']+ "%"
                    var humid5value ="Humidity:"+data ['daily'][5]['humidity']+ "%"

                    humid1.innerHTML=humid1value
                    humid2.innerHTML=humid2value
                    humid3.innerHTML=humid3value
                    humid4.innerHTML=humid4value
                    humid5.innerHTML=humid5value 

                    // uv index
                    var uvIndex = document.querySelector('.uvIndex')
                    var uvIndexValue =data['daily'][0]['uvi']
                    uvIndex.innerHTML = "UV: " + uvIndexValue
                    
                  
                        if(uvIndexValue < 3 ){
                            uvIndex.style.backgroundColor=("green");
                        }
                        else if(uvIndexValue< 6){
                            uvIndex.style.backgroundColor=("yellow")
                        }
                        else if(uvIndexValue< 8 ){
                            uvIndex.style.backgroundColor=("orange")
                        }
                        else if(uvIndexValue<= 11){
                            uvIndex.style.backgroundColor=("red")
                        }
                        else if(uvIndexValue>= 11 ){
                            uvIndex.style.backgroundColor=("purple")
                        }
                        
                        
                        
                        
                    


                    // saved items 
                    document.querySelector(".list").value = localStorage.getItem('city');
                    var list = document.querySelector (".list")
                    var citySaved = localStorage.getItem('city')
                    list.innerHTML = citySaved


                    localStorage.setItem('city', city.value)
                    
                    
                })
                
                

            // lat.innerHTML = latValue
            // lon.innerHTML = lonValue

        })
   

        // stops it from refreshing 
        event.preventDefault();
        
})


