import getUserSearchLocation from './getUserSearchLocation';
import getWeather from '../model/getWeatherData';
import currentTemperature from './currentTemperature';
import '../style.css';

const button = document.getElementById('weatherSubmit');

/* getWeather is an async function, so we have to wait for it to
complete before changing the text of our element */

async function handleWeatherSubmit() {
  const location = getUserSearchLocation();
  const text = await getWeather(location);
  currentTemperature(location, text, 'snow');
}

button.addEventListener('click', handleWeatherSubmit);
