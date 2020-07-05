import React, { useEffect, useState } from "react";
import { Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import { GetCoordinates } from "../../../utils/GlobalFetch/GlobalFetch";
import cogoToast from "cogo-toast";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;

const MarkerDisplay = ({ cityName, setViewPort, streetName }) => {
  const [latlng, setLatlng] = useState([31.93886, 34.84055]);
  const [isExist, setIsExist] = useState(false);
  const [PolyCoordinates, setPolyCoordinates] = useState([
    [0, 0],
    [0, 0],
  ]);

  console.log(streetName);
  useEffect(() => {
    streetName &&
      GetCoordinates(cityName, streetName)
        .then((response) => {
          // handle success
          response.data.map((e) => {
            if (e && e.display_name.includes(cityName)) {
              setIsExist(true);
              setLatlng([e.lat, e.lon]);
              setViewPort({ center: [e.lat, e.lon], zoom: 15 });
              var temp = [];
              e.geojson.coordinates.map(
                (coordinate) =>
                  (temp = [...temp, [coordinate[1], coordinate[0]]])
              );
              setPolyCoordinates(temp);
              return cogoToast.success("מיקום נטען בהצלחה");
            }
          });
          if (!isExist) {
            cogoToast.error("אין נתוני מיקום להציג");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
  }, [streetName, isExist, cityName, setViewPort]);
  return (
    <Polygon
      positions={PolyCoordinates}
      // onClick={(e) => handleClick(location, e, location.properties.UniqueId)}
      // onmouseover={(e) => handleMouseOver(e, location.properties.UniqueId)}
      opacity={5}
      color={"red"}
      key={cityName}
    >
      <Marker key={cityName} position={latlng}>
        <Popup>{cityName}</Popup>
      </Marker>
    </Polygon>
  );
};
export default MarkerDisplay;
