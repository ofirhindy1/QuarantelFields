import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "@material-ui/core";
import cogoToast from "cogo-toast";
import STREETS from "../../../../utils/STREETS.json";
import InputLabel from "@material-ui/core/InputLabel";

interface StreetsProps {
  streetIndex: Number;
  setStreetIndex: any;
  cityIndex: Number;
  errors: any;
}

const StreetsField: React.FC<StreetsProps> = ({
  streetIndex,
  setStreetIndex,
  cityIndex,
  errors,
}) => {
  // console.log(city);

  const handleChange = (event: any) => {
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
        required
        value={streetIndex}
        onChange={handleChange}
        onClick={(e) => !cityIndex && cogoToast.error("אנא הזן עיר")}
        disabled={!cityIndex}
        variant="outlined"
        error={errors}>
        {STREETS.STREETS.map(
          (street) =>
            street.STR_ID.slice(-street.STR_ID.length, -4) ===
              cityIndex.toString() && (
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
