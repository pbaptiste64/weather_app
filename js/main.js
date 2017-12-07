//Weather API endpoint
var api_root_url = 'http://api.openweathermap.org/data/2.5/weather?zip=' 

//API Key

var api_key = 'f2a4e6bdd027277826c740eb761756c8'

//Select elements from the DOM - 'document.'
var city_name = document.querySelector('#city_name')
var zip = document.querySelector('.searchBox')
var weather = document.querySelector('.weather')
var temp = document.querySelector('.temp')
var humid = document.querySelector('.humid')
var convert = document.querySelector('.convert')
var icon = document.querySelector('#iconBox')
var temper 
var state = true

function kelvinToFarenheit(kelvin){
    return Math.round((kelvin * (9/5)) - 459.67)
}

function farenheitToCelcius(farenheit){
    return Math.round((farenheit - 32) * (5/9))
}

function addIcon(w){
    if(w == "Clouds"){
        icon.src =`img/cloudy.png`
    }
    if(w == "Cloudy"){
        icon.src =`img/cloudy.png`
    }
    if(w == "Partly-cloudy"){
        icon.src =`img/partly.cloudy.png`
    }
    if(w == "Rain"){
        icon.src =`img/rain.png`
    }
    if(w == "Snow"){
        icon.src =`img/snow.png`
    }
    if(w == "Sun"){
        icon.src =`img/sun.png`
    }
    if(w == "Thunderstorm"){
        icon.src =`img/thunderstorm.png`
    }
    if(w == "Clear"){
        icon.src =`img/sunny.png`
    }
    
}
function getWeather(zipcode){
    $.ajax({
        type: 'GET',
        url: `${api_root_url}${zipcode},us&appid=${api_key}`, 
        datatype: 'json',
        success: function(data){
            console.log(data.weather[0].main)
            temper = kelvinToFarenheit(data.main.temp)
            weather.textContent = data.weather[0].main
            addIcon(data.weather[0].main)
            city_name.textContent = data.name
            temp.innerHTML = `${(kelvinToFarenheit(data.main.temp))}  &deg F;`
            humid.textContent = `${data.main.humidity}%`
        },
        error: function(error){
            console.log(error)
        }
    })
}


getWeather('33166')

zip.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        getWeather(this.value)
    }
})

convert.addEventListener('click', function(){
    // console.log(farenheitToCelcius(temper))
   if(state == true){
       temp.innerHTML = `${farenheitToCelcius(temper)} &deg C`
       state = false
   }else {
       temp.innerHTML = `${temper} &deg F`
       state = true
   }
    
    
})

/*make button, make event listener (a-variable, b-add eventListener), make a function(1-Make farenheit to celcius, 2-get the current value of farenheit, 3-add the text to its container.)*/