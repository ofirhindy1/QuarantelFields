import React from "react";
import TextField from "@material-ui/core/TextField";
import CogoToast from "cogo-toast";

/**@param street - the selcted street
 * @param setHomeNum - the function that changes the home number
 * @param homeNum - the selcted home number
 */
const HomeNumField = ({ streetIndex, setHomeNum, homeNum }) => {
  const handleChange = (e) => {
    if (e.target.value > 0) {
      setHomeNum(e.target.value);
    } else {
      CogoToast.error("מספר בית אינו תקין", 3);
      setHomeNum("");
    }
  };
  return (
    <div className="App">
      <TextField
        label="מספר בית"
        variant="outlined"
        value={homeNum}
        type="text"
        onChange={handleChange}
        disabled={!streetIndex}
      />
    </div>
  );
};

export default HomeNumField;
