import React, { useState } from "react";
import Form from "../Form";
import Map from "../Map/index";

function MainPage() {
  const [cityName, setCityName] = useState("");
  const [streetName, setStreetName] = useState("");

  return (
    <div style={{ display: "flex", direction: "rtl" }}>
      <Form setCityName={setCityName} setStreetName={setStreetName} />
      <Map cityName={cityName} streetName={streetName} />
    </div>
  );
}

export default MainPage;
