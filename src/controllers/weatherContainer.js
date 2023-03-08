import getUserSearchLocation from './getUserSearchLocation';
import getWeather from '../model/getWeatherData';
import '../style.css';

const button = document.getElementById('weatherSubmit');
const textContainer = document.getElementById('userWeather');

/* getWeather is an async function, so we have to wait for it to
complete before changing the text of our element */

async function handleClick() {
  const text = await getWeather(getUserSearchLocation());
  textContainer.innerText = text;
}

button.addEventListener('click', handleClick);
