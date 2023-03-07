import '../style.css';

// Parses a JSON response from an API call
function parseResponse(response) {
  return response.json();
}

/* Makes a call to the OpenWeatherMap Geocoder API, which is then turned into an array of
five objects that match the city argument */
async function getCoordinates(city) {
  // insert the city argument into the url with a template literal
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c1547c57bf49fae207b1edc2cd34e27e`;

  // response from the OpenWeatherMap server
  const response = await fetch(url);
  // Parse the response and return an array of the top 5 matches
  const cityList = await parseResponse(response);
  console.log(cityList);

  // Grab the first city (best match) from the array
  const firstCity = cityList[0];

  // Store the latitude and the longitude in an array
  const coordinates = [firstCity.lat, firstCity.lon];

  return coordinates;
}

// A function to get the weather of a location
async function getWeather(city) {
  const coordinates = await getCoordinates(city);
  console.log(coordinates);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=c1547c57bf49fae207b1edc2cd34e27e`;
  const response = await fetch(weatherUrl);
  const weatherData = await parseResponse(response);

  console.log(weatherData);
}

getWeather('london');
