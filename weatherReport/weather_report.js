function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'bc09cc6af7d66fff9e4388f502906230';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(fetch(apiUrl))
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Tempearture: ${data.main.temp} &#8451;
        </p>
        <p>Weather: ${data.weather[0].description}</p>`;
        
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
    
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );