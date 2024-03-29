// Parses a JSON response from an API call
function parseResponse(response) {
  return response.json();
}

/* Makes a call to the OpenWeatherMap Geocoder API, which is then turned into an array of
five objects that match the city argument */
async function getCoordinates(city) {
  // insert the city argument into the url with a template literal
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=c1547c57bf49fae207b1edc2cd34e27e`;

  // store the response of the fetch from the OpenWeatherMap server
  const response = await fetch(url);
  // Parse the response and return an array of the top 5 matches
  const cityList = await parseResponse(response);
  console.log(cityList);

  // Grab the first city (best match) from the array
  const firstCity = cityList[0];

  // Store the latitude and the longitude in an array
  const coordinates = [firstCity.lat, firstCity.lon, firstCity.name];

  return coordinates;
}

// A function to get the weather of a location
async function getWeather(city) {
  // Calls the getCoordinates function to get the latitude, longitude and city name from the API
  const coordinates = await getCoordinates(city);

  // insert the coordinates and the measure type (metric) into the url using a template literal
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${'metric'}&appid=c1547c57bf49fae207b1edc2cd34e27e`;
  const currentForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&units=${'metric'}&cnt=24&appid=c1547c57bf49fae207b1edc2cd34e27e`;

  // store the response of the fetch from the OpenWeatherMap server
  const currentWeatherResponse = await fetch(currentWeatherUrl);
  const currentForecastResponse = await fetch(currentForecastUrl);

  // Parse the response and return an object
  const currentWeatherData = await parseResponse(currentWeatherResponse);
  const currentForecastData = await parseResponse(currentForecastResponse);
  console.log(currentWeatherData);
  console.log(currentForecastData);
  // Log the information
  console.log(`The current weather in ${coordinates[2]} at coordinates ${coordinates[0]} in the country ${currentWeatherData.sys.country} is ${currentWeatherData.main.temp} degrees celsius`);
  return currentWeatherData.main.temp;
}

export default getWeather;
