import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CITIES from "../../../../utils/CITIES.json";
import InputLabel from "@material-ui/core/InputLabel";

/**@param cityIndex - the selcted city index (as in the provided indexes)
 * @param setCityIndex - the function that changes the city
 */
const Form = ({ setCityIndex, cityIndex, errors }) => {
  const handleChange = (event) => {
    // console.log(event.target.value);
    setCityIndex(event.target.value);
  };

  return (
    <div className="App">
      <InputLabel
        style={{
          justifyContent: "flex-end",
          display: "flex",
          width: "100%",
          fontWeight: "bold",
        }}>
        אנא בחר עיר
      </InputLabel>
      <Select
        style={{ width: "100%" }}
        value={cityIndex}
        onChange={handleChange}
        variant="outlined"
        required
        error={errors}>
        {CITIES.CITIES.sort((city1, city2) =>
          city1.SETL_NAME.localeCompare(city2.SETL_NAME)
        ).map((city) => (
          <MenuItem value={city.SETL_CODE} key={city.SETL_CODE}>
            {city.SETL_NAME}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Form;
