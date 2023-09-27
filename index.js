// by rapid -api 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd3a6f5e234msh293029c75a3bdd5p17bec2jsn16845bdf6806',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// for any city searched
const getWeather = (city) => {
    // will change the city name in heading as well
    cityName.innerHTML= city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city , options)
	.then(response => response.json())
	.then(response => {

// logic to fill boxes with data
        console.log(response)
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
.catch(err => console.error(err));

}
// so that any city's weather can be searched in search area 
submit.addEventListener("click",(e)=>{
    // so that the page is not reloaded
    e.preventDefault()
    getWeather(city.value)
})
// by defaulty will show karachi weather
getWeather("Karachi")

	