import React from "react";
import Fields from "./Fields";

/** The theme you want to pass to other components */
const ProvidedTheme = {
  color: "red",
};
function Form() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Fields ProvidedTheme={ProvidedTheme} />
    </div>
  );
}

export default Form;
