import './style.css';

function getCoordinates(city) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c1547c57bf49fae207b1edc2cd34e27e`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const firstCity = response[0];
      console.log(firstCity);
      const coordinates = [firstCity.lat, firstCity.lon];
      return coordinates;
    })
    .then((coordinates) => {
      console.log(coordinates);
      const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=c1547c57bf49fae207b1edc2cd34e27e`;
      fetch(weatherurl)
        .then((response) => {
          console.log(response.json());
        });
    });
}

getCoordinates('london');
