let  input = document.getElementById("input"),
btn = document.getElementById("btn"),
temp = document.querySelector(".temp"),
cityName = document.querySelector(".city"),
humidity = document.querySelector(".humidity"),
wind = document.querySelector(".wind"),
weatherImg=document.querySelector(".weather-img"),
weather = document.querySelector(".weather");

const apiKey="4dcd0df21dddbaf10ad6ff9cffda300b";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city){
    try{
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        var data = await response.json();
        if (!response.ok) {
            throw new Error("City not found");
        }
    if((data.weather[0].main).toLowerCase() == "clear"){
        weatherImg.innerHTML=`<img src="./gifs/sun.png" alt="weather-png" />`
    } 
    else if((data.weather[0].main).toLowerCase() == "clouds"){
        weatherImg.innerHTML=`<img src="./gifs/cloudy.png" alt="weather-png" />`
    } 
    else if((data.weather[0].main).toLowerCase() == "rain"){
        weatherImg.innerHTML=`<img src="./gifs/rain.png" alt="weather-png" />`
    }
     else if((data.weather[0].main).toLowerCase() == "thunderstorm"){
        weatherImg.innerHTML=`<img src="./gifs/storm.png" alt="weather-png" />`
    }
     else if((data.weather[0].main).toLowerCase() == "snow"){
        weatherImg.innerHTML=`<img src="./gifs/snow.png" alt="weather-png" />`
    } 
    else if((data.weather[0].main).toLowerCase() == "fog"){
        weatherImg.innerHTML=`<img src="./gifs/mist.png" alt="weather-png" />`
    }

    console.log(data)

console.log(data)
console.log(data.name)
console.log(data.wind.speed)
console.log(data.main.humidity)
console.log(data.weather[0].main)

    cityName.innerText=data.name
    temp.innerHTML=`<h2>${Math.round(data.main.temp)}°C</h2>`
    humidity.innerHTML=`${data.main.humidity}%`
    wind.innerHTML=`${data.wind.speed}km/h`
    weather.innerHTML=`${data.weather[0].main}`
   
    }
    catch (error){
        console.error("Error fetching weather data:",error);
        city.innerHTML = `<h2>City not found</h2>`; 
    }
}

btn.addEventListener("click",()=>{
    checkWeather(input.value);
})

