import React, { useState } from "react";
import Leaflet from "leaflet";
import { Map } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { makeStyles } from "@material-ui/core/styles";
// // import Context from "../Context";
// import ControlPanel from "../ControlPanel/ControlPanel";
// import PolygonsDraw from "./PolygonsDraw/PolygonsDraw";
// import SchoolArrowDraw from "./SchoolArrowDraw/SchoolArrowDraw";
// import SchoolsDrawOnMap from "./SchoolsDrawOnMap/SchoolsDrawOnMap";
// import useGlobalState from "../../GlobalStates/MapStates/state";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import MarkerDisplay from "./MarkerDisplay";
// import Loader from "../Loader/Loader";

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

const MapDispaly = ({ cityName, streetName }) => {
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
      {/* <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        //  url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
        // url={"https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"}
        // url={"https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png"}
        // url={
        //   "https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={AIzaSyDkG702RFFEEm08CP87sLK_amm-ru_eUVs}"
        // }
        // url={'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'}
        // url={'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'}
        // apiKey={"AIzaSyDkG702RFFEEm08CP87sLK_amm-ru_eUVs"}
      /> */}
      <MarkerDisplay
        cityName={cityName}
        setViewPort={setViewPort}
        streetName={streetName}
      />
    </Map>
  );
};
export default MapDispaly;
