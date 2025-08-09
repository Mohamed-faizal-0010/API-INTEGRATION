async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = "bc4a0dc8517d4c541bb8a33b84b4c7f6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    document.getElementById('weatherResult').innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌥️ Weather: ${data.weather[0].main}</p>
    `;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
