import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CitiesField from "./CitiesField/index";
import StreetsField from "./StreetsField/index";
import HomeNumField from "./HomeNumStreets/index";
import cogoToast from "cogo-toast";

/**
 * @param ProvidedTheme - the theme you got from the parent component
 *
 */
const useStyles = makeStyles(() => ({
  button: (ProvidedTheme) => {
    return { color: ProvidedTheme.color };
  },
}));
/**
 * @param ProvidedTheme - The theme you got from the parent component
 */

const validateField = (cityIndex, streetIndex, homeNum) => {
  const isValid = cityIndex && streetIndex && homeNum;

  if (!isValid) {
    cogoToast.error("אנא מלא את כל הפרטים");
  }

  return isValid;
};
function AllFields({ ProvidedTheme }) {
  const [cityIndex, setCityIndex] = useState(0);
  const [errors, setErrors] = useState({
    city: false,
    street: false,
    homeNum: false,
  });

  const [streetIndex, setStreetIndex] = useState(0);
  const [homeNum, setHomeNum] = useState("");

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

  const classes = useStyles(ProvidedTheme);
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
          <StreetsField
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
            className={classes.button}
            onClick={handleClick}>
            שלח
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AllFields;
