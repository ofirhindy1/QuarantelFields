import React, { useState } from "react";
import Leaflet from "leaflet";
import { Map } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { makeStyles } from "@material-ui/core/styles";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import MarkerDisplay from "./MarkerDisplay";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;

// Leaflet.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   // iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   iconUrl: require("../Map/SchoolsDrawOnMap/defManIcon.png"),
//   iconSize: [24, 24], // size of the icon

//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const useStyles = makeStyles((theme) => ({
  map: {
    height: 720,
    width: "100%",
    boxShadow: "8px 8px 8px 8px rgba(0,0,0,.125)",
  },
}));

const MapDispaly = ({ cityName, streetName, homeNum }) => {
  const [viewport, setViewPort] = useState({
    center: [31.93886, 34.84055],
    zoom: 10,
  });
  const classes = useStyles();

  return (
    <Map viewport={viewport} className={classes.map} animate>
      <ReactLeafletGoogleLayer
        googleMapsLoaderConf={{
          KEY: "AIzaSyDkG702RFFEEm08CP87sLK_amm-ru_eUVs",
        }}
        type="roadmap"
      />
      <MarkerDisplay
        cityName={cityName}
        setViewPort={setViewPort}
        streetName={streetName}
        homeNum={homeNum}
      />
    </Map>
  );
};
export default MapDispaly;
