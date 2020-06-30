import React from "react";
import TextField from "@material-ui/core/TextField";
import CogoToast from "cogo-toast";

interface HomeNumberProps {
  streetIndex: Number;
  setHomeNum: any;
  homeNum: string;
  errors: any;
}

const HomeNumField: React.FC<HomeNumberProps> = ({
  streetIndex,
  setHomeNum,
  homeNum,
  errors,
}) => {
  const handleChange = (e: any) => {
    if (e.target.value > 0) {
      setHomeNum(e.target.value);
    } else {
      CogoToast.error("מספר בית אינו תקין");
      setHomeNum("");
    }
  };
  return (
    <div className="App">
      <TextField
        required
        label="מספר בית"
        variant="outlined"
        value={homeNum}
        type="text"
        error={errors}
        onChange={(e) => handleChange(e)}
        disabled={!streetIndex}
      />
    </div>
  );
};

export default HomeNumField;
