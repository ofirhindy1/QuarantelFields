const axios = require("axios");

/** @param name - the city name that the user sends, to get the coordinates in the mentioned city */

const GetCoordinates = (streetName, cityName, homeNum) => {
  return axios.get(
    // `https://nominatim.openstreetmap.org/search.php?q=${cityName},${
    //   streetName && streetName
    // }&polygon_geojson=1&format=json`
    `https://maps.googleapis.com/maps/api/geocode/json?address=${
      streetName && streetName
    } ${homeNum} ${cityName} &key=AIzaSyDkG702RFFEEm08CP87sLK_amm-ru_eUVs`
  );
};

module.exports = { GetCoordinates };
