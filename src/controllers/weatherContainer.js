import getUserSearchLocation from './getUserSearchLocation';
import { getWeather } from '../model/getWeatherData';
import '../style.css';

const button = document.getElementById('weatherSubmit');

button.addEventListener('click', () => {
  getWeather(getUserSearchLocation());
});
