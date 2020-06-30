import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import CitiesField from "./CitiesField/index";
import StreetsData from "./StreetsField/index";
import HomeNumField from "./HomeNumber/index";
import cogoToast from "cogo-toast";

/** @param props - the theme you want to provide --> you can see an example below */
const useStyles = makeStyles((theme) => ({
  //for example if you want to change a button color that's the way
  button: (ProvidedTheme: any) => {
    return { color: ProvidedTheme.color };
  },

  // constant Material-UI theme
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const validateField = (
  cityIndex: Number,
  streetIndex: Number,
  homeNum: String
) => {
  const isValid = cityIndex && streetIndex && homeNum;

  if (!isValid) {
    cogoToast.error("אנא מלא את כל הפרטים");
  }

  return isValid;
};
function AllFields(ProvidedTheme: any) {
  console.log(ProvidedTheme.ProvidedTheme);
  const classes = useStyles(ProvidedTheme.ProvidedTheme);

  const [errors, setErrors] = useState<Object>(false);
  const [cityIndex, setCityIndex] = useState<Number>(0);
  const [streetIndex, setStreetIndex] = useState<Number>(0);
  const [homeNum, setHomeNum] = useState<string>("");

  const handleClick = () => {
    const isFieldValid = validateField(cityIndex, streetIndex, homeNum);
    if (isFieldValid) {
      cogoToast.success("הפרטים מולאו בהצלחה");
      setErrors(false);
    } else {
      setErrors(true);
    }
  };

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
            <CitiesField
              setCityIndex={setCityIndex}
              cityIndex={cityIndex}
              errors={errors}
            />
            <StreetsData
              setStreetIndex={setStreetIndex}
              cityIndex={cityIndex}
              streetIndex={streetIndex}
              errors={errors}
            />
            <HomeNumField
              streetIndex={streetIndex}
              homeNum={homeNum}
              setHomeNum={setHomeNum}
              errors={errors}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.button}>
            שלח
          </Button>
        </FormControl>
      </div>
      <div></div>
    </div>
  );
}

export default AllFields;
