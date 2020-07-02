import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CitiesField from "./CitiesField/index";
import StreetsData from "./StreetsField/index";
import HomeNumField from "./HomeNumber/index";
import cogoToast from "cogo-toast";

/** @param props - the theme you want to provide --> you can see an example below */
const useStyles = makeStyles(() => ({
  //for example if you want to change a button color that's the way
  button: (ProvidedTheme: any) => {
    return { color: ProvidedTheme.color };
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
  // console.log(ProvidedTheme.ProvidedTheme);
  const classes = useStyles(ProvidedTheme.ProvidedTheme);

  const [errors, setErrors] = useState({
    city: false,
    street: false,
    homeNum: false,
  });
  const [cityIndex, setCityIndex] = useState<Number>(0);
  const [streetIndex, setStreetIndex] = useState<Number>(0);
  const [homeNum, setHomeNum] = useState<string>("");

  const handleClick = () => {
    const isFieldValid = validateField(cityIndex, streetIndex, homeNum);
    if (isFieldValid) {
      cogoToast.success("הפרטים מולאו בהצלחה");
    }
    setErrors({
      city: !cityIndex,
      street: !streetIndex,
      homeNum: !homeNum,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "lightgray",
        width: "20vw",
        padding: "36px",
        justifyContent: "center",
        marginTop: "150px",
      }}>
      <div className="App">
        {" "}
        <div>
          <CitiesField
            setCityIndex={setCityIndex}
            cityIndex={cityIndex}
            errors={errors.city}
          />
          <StreetsData
            setStreetIndex={setStreetIndex}
            cityIndex={cityIndex}
            streetIndex={streetIndex}
            errors={errors.street}
          />
          <HomeNumField
            streetIndex={streetIndex}
            homeNum={homeNum}
            setHomeNum={setHomeNum}
            errors={errors.homeNum}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.button}>
            שלח
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AllFields;
