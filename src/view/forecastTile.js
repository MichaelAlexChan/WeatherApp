export default function generateForecastTile() {
  const forecastRow = document.getElementById('forecast');
  console.log(forecastRow);

  const condition = document.createElement('h2');
  forecastRow.appendChild(condition);

  const temperature = document.createElement('h1');
  forecastRow.appendChild(temperature);

  const img = document.createElement('img');
  forecastRow.appendChild(img);
}
