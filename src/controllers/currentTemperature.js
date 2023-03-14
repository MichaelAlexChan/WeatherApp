import getConditionImage from '../model/getConditionImage';

export default function currentTemperature(location, temperature, condition) {
  document.getElementById('location').innerText = location;
  document.getElementById('currentTemp').innerText = temperature;
  document.getElementById('currentCondition').innerText = condition;
  document.getElementById('conditionImg').src = getConditionImage(condition);
}
