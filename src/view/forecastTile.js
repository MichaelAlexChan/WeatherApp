export default function generateForecastTile() {
  const forecastTile = document.getElementById('forecast');
  forecastTile.classList.add('forecastTile');

  const day = document.createElement('h1');
  forecastTile.appendChild(day);

  const condition = document.createElement('h2');
  forecastTile.appendChild(condition);

  const temperature = document.createElement('h1');
  forecastTile.appendChild(temperature);

  const img = document.createElement('img');
  forecastTile.appendChild(img);
}
