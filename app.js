// Website Link - https://ani-rude.github.io/weather_api/
const apiKey="863242cfb2b1d357e6093d9a4df19a4b";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBTN=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function weatherFnc(city){
     const response=await fetch(apiURL+city+`&appid=${apiKey}`);
     
     if(response.status==404)
     {
          document.querySelector(".error").style.display="block";
          document.querySelector(".weather").style.display="none";
     }
     else
     {
          var data=await response.json();
     }

     console.log(data);

     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
     document.querySelector(".humid").innerHTML=data.main.humidity+"%";
     document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

     if (data.weather[0].main=="Clouds"){
          weatherIcon.src="https://cdn.discordapp.com/attachments/1048250927787810836/1142219933552476210/clouds.png"
     }
     else if (data.weather[0].main=="Rain"){
          weatherIcon.src="https://cdn.discordapp.com/attachments/1048250927787810836/1142219934504599673/rain.png"
     }
     else if (data.weather[0].main=="Mist"){
          weatherIcon.src="https://cdn.discordapp.com/attachments/1048250927787810836/1142219934290673704/mist.png"
     }
     else if (data.weather[0].main=="Drizzle"){
          weatherIcon.src="https://cdn.discordapp.com/attachments/1048250927787810836/1142219933770592286/drizzle.png"
     }
     else if (data.weather[0].main=="Clear"){
          weatherIcon.src="https://cdn.discordapp.com/attachments/1048250927787810836/1142219933334388786/clear.png"
     }
     else if (data.weather[0].main=="Snow"){
          weatherIcon.src="https://cdn.discordapp.com/attachments/1048250927787810836/1142219932864610334/snow.png"
     }

     document.querySelector(".weather").style.display="block";
     document.querySelector(".error").style.display="none";
}

searchBTN.addEventListener("click", ()=>{
     weatherFnc(searchBox.value); //Brings input to the api
});