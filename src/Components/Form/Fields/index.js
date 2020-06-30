import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import CitiesField from "./CitiesField/index";
import StreetsData from "./StreetsField/index";
import HomeNumField from "./HomeNumStreets/index";
import STR_NAME_AND_ID from "../../../utils/STR_NAME_AND_ID.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function AllFields() {
  console.log(STR_NAME_AND_ID);
  const classes = useStyles();
  const [cityIndex, setCityIndex] = useState("");
  const [streetIndex, setStreetIndex] = useState("");
  const [homeNum, setHomeNum] = useState("");

  return (
    <div>
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <FormControl className={classes.formControl}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}>
            <CitiesField setCityIndex={setCityIndex} cityIndex={cityIndex} />
            <StreetsData
              setStreetIndex={setStreetIndex}
              cityIndex={cityIndex}
              streetIndex={streetIndex}
            />
            <HomeNumField
              streetIndex={streetIndex}
              homeNum={homeNum}
              setHomeNum={setHomeNum}
            />
          </div>
        </FormControl>
      </div>
      <div>
        <Button variant="contained" color="primary">
          שלח
        </Button>
      </div>
    </div>
  );
}

export default AllFields;
