import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "@material-ui/core";
import STREETS from "../../../../utils/STREETS.json";

// const STREETS = [
//   {
//     "1100": "שכונה א",
//   },
//   {
//     "1101": "שכונה ב",
//   },
//   {
//     "2102": "שכונה ג",
//   },
//   {
//     "2100": "שכונה ד",
//   },
//   {
//     "3101": "שכונה ה",
//   },
//   {
//     "4102": "שכונה ו",
//   },

//   {
//     "5102": "שכונה ז",
//   },
//   {
//     "6101": "שכונה ח",
//   },
//   {
//     "7101": "שכונה ט",
//   },
//   {
//     "7102": "שכונה י",
//   },
// ];

/**@param street - the selcted street
 * @param setHomeNum - the function that changes the home number
 * @param city - the selcted city
 */
const StreetsField = ({ streetIndex, setStreetIndex, cityIndex }) => {
  // console.log(streetIndex);

  const handleChange = (event) => {
    setStreetIndex(event.target.value);
  };
  return (
    <div className="App">
      <Select
        value={streetIndex}
        onChange={handleChange}
        disabled={!cityIndex}
        variant="outlined">
        {STREETS.STREETS.map(
          (street, index) =>
            // console.log(
            //   "all: ",
            //   street.STR_ID.substr(0, 2),
            //   "SSSSSSS: ",
            //   cityIndex + 1
            // )

            parseInt(street.STR_ID.slice(-6, -4)) === cityIndex + 1 && (
              <MenuItem value={street.STR_ID} key={street.STR_ID}>
                {street.STR_NAME}
              </MenuItem>
            )
        )}
      </Select>
    </div>
  );
};

export default StreetsField;
