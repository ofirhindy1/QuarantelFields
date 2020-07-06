import React from "react";
import TextField from "@material-ui/core/TextField";
import CogoToast from "cogo-toast";
import InputLabel from "@material-ui/core/InputLabel";

/**@param street - the selcted street
 * @param setHomeNum - the function that changes the home number
 * @param homeNum - the selcted home number
 */
const HomeNumField = ({ streetIndex, setHomeNum, homeNum, errors }) => {
  return (
    <div className="App">
      <InputLabel
        style={{
          justifyContent: "flex-end",
          display: "flex",
          width: "100%",
          fontWeight: "bold",
        }}>
        אנא בחר מספר בית
      </InputLabel>
      <TextField
        required
        label="מספר בית"
        variant="outlined"
        value={homeNum}
        type="text"
        onClick={(e) => !streetIndex && CogoToast.error("אנא הזן רחוב")}
        onChange={(e) => setHomeNum(e.target.value)}
        disabled={!streetIndex}
        error={errors}
      />
    </div>
  );
};

export default HomeNumField;
