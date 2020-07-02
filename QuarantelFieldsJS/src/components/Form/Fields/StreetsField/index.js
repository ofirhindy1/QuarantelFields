import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "@material-ui/core";
import STREETS from "../../../../utils/STREETS.json";
import cogoToast from "cogo-toast";
import InputLabel from "@material-ui/core/InputLabel";

/**@param streetIndex - the selcted street index (as in the provided indexes)
 * @param setHomeNum - the function that changes the home number
 * @param cityIndex - the selcted city index (as in the provided indexes)
 */
const StreetsField = ({ streetIndex, setStreetIndex, cityIndex, errors }) => {
  console.log(streetIndex);

  const handleChange = (event) => {
    setStreetIndex(event.target.value);
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
        אנא בחר רחוב
      </InputLabel>

      <Select
        style={{ width: "100%" }}
        value={streetIndex}
        onChange={handleChange}
        onClick={(e) => !cityIndex && cogoToast.error("אנא הזן עיר")}
        disabled={!cityIndex}
        variant="outlined"
        error={errors}>
        {STREETS.STREETS.map(
          (street) =>
            street.STR_ID.slice(-street.STR_ID.length, -4) === cityIndex && (
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
