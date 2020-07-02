import React from "react";
import TextField from "@material-ui/core/TextField";
import CogoToast from "cogo-toast";
import InputLabel from "@material-ui/core/InputLabel";

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
  // const handleChange = (e: any) => {
  //   if (e.target.value > 0) {
  //     setHomeNum(e.target.value);
  //   } else {
  //     CogoToast.error("מספר בית אינו תקין");
  //     setHomeNum("");
  //   }
  // };
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
        error={errors}
        onClick={(e) => !streetIndex && CogoToast.error("אנא הזן רחוב")}
        onChange={(e) => setHomeNum(e.target.value)}
        disabled={!streetIndex}
      />
    </div>
  );
};

export default HomeNumField;
