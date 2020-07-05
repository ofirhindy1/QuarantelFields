import React from "react";
import Fields from "./Fields";

/** The theme you want to pass to other components */
const ProvidedTheme = {
  color: "red",
};
function Form({ setCityName, setStreetName }) {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Fields
        ProvidedTheme={ProvidedTheme}
        setCityName={setCityName}
        setStreetName={setStreetName}
      />
    </div>
  );
}

export default Form;
