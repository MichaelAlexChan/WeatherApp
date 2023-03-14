export default function getConditionImage(condition) {
  let img = '/src/assets/';
  switch (condition) {
    case 'cloudy':
      img += 'cloudy.png';
      break;
    case 'rain':
      img += 'rainy.png';
      break;
    case 'snow':
      img += 'snow.png';
      break;
    case 'sunny':
      img += 'sunny.png';
      break;
    case 'storm':
      img += 'storm.png';
      break;
    default:
      img += 'sunny.png';
  }
  return img;
}
