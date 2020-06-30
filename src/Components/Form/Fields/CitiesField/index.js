import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CITIES from "../../../../utils/CITIES.json";

// import InputLabel from "@material-ui/core/InputLabel";

// const CITIES = [
//   {
//     "1": "חיפה",
//   },
//   {
//     "2": "חדרה",
//   },
//   {
//     "3": "תל אביב",
//   },
//   {
//     "4": "נתניה",
//   },
//   {
//     "5": "בת ים",
//   },
//   {
//     "6": "נהריה",
//   },
//   {
//     "7": "רחובות",
//   },
// ];

/**@param city - the selcted city
 * @param setCity - the function that changes the city
 */
const Form = ({ setCityIndex, cityIndex }) => {
  // console.log(CITIES_AND_STREETS);
  const handleChange = (event) => {
    setCityIndex(event.target.value);
  };

  return (
    <div className="App">
      <Select value={cityIndex} onChange={handleChange} variant="outlined">
        {CITIES.CITIES.map((city, index) => (
          // console.log(city.STR_ID.slice(-6, -4))
          <MenuItem value={index} key={index}>
            {city.SETL_NAME}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Form;
