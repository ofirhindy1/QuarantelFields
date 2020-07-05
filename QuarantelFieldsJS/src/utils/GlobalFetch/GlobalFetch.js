const axios = require("axios");

/** @param name - the city name that the user sends, to get the coordinates in the mentioned city */

const GetCoordinates = (cityName, streetName) => {
  return axios.get(
    `https://nominatim.openstreetmap.org/search.php?q=${cityName},${
      streetName && streetName
    }&polygon_geojson=1&format=json`
  );
};

module.exports = { GetCoordinates };
