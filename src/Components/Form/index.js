import React from "react";
import Fields from "./Fields";
const ProvidedTheme = {
  color: "red",
};
function Form() {
  return (
    <div className="App">
      <Fields ProvidedTheme={ProvidedTheme} />
    </div>
  );
}

export default Form;
