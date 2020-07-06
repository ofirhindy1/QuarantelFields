import React, { useEffect, useState } from "react";
import { Marker, Popup,
  //  Polygon 
  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import { GetCoordinates } from "../../../utils/GlobalFetch/GlobalFetch";
import cogoToast from "cogo-toast";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;
const defIcon = Leaflet.icon({
  iconUrl: require("./marker.png"),
  iconSize: [24, 24], // size of the icon
});

const MarkerDisplay = ({ cityName, setViewPort, streetName, homeNum }) => {
  const [latlng, setLatlng] = useState([0, 0]);
  const [isExist, setIsExist] = useState(false);
  // const [PolyCoordinates, setPolyCoordinates] = useState([
  //   [0, 0],
  //   [0, 0],
  // ]);

  useEffect(() => {
    console.log(homeNum);

    homeNum !== "" &&
      GetCoordinates(cityName, streetName, homeNum)
        .then((response) => {
          // handle success
          console.log(response.data.results);
          response.data.results.map((result) => {
            if (result && result.formatted_address.includes(cityName)) {
              setIsExist(true);
              setLatlng([
                result.geometry.location.lat,
                result.geometry.location.lng,
              ]);
              setViewPort({
                center: [
                  result.geometry.location.lat,
                  result.geometry.location.lng,
                ],
                zoom: 17,
              });
              // TO SET THE STREET POLYGON, THE CURRENT API DOESNT SUPPORT POLYGONS COORDINATES

              // setPolyCoordinates([
              //   [
              //     result.geometry.viewport.northeast.lat,
              //     result.geometry.viewport.northeast.lng,
              //   ],
              //   [
              //     result.geometry.viewport.southwest.lat,
              //     result.geometry.viewport.southwest.lng,
              //   ],
              // ]);
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
  }, [streetName, isExist, cityName, setViewPort, homeNum]);
  return (


    // <Polygon
    //   positions={PolyCoordinates}
    //   opacity={5}
    //   color={"red"}
    //   key={cityName}>
      latlng !== [0, 0] && (
        <Marker key={cityName} position={latlng} icon={defIcon}>
          <Popup>{cityName}</Popup>
        </Marker>
      )
    // </Polygon>
  );
};
export default MarkerDisplay;
