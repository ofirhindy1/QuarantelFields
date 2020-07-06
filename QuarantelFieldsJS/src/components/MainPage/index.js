import React, { useState } from "react";
import Form from "../Form";
import Map from "../Map/index";

function MainPage() {
  const [cityName, setCityName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [homeNum, setHomeNum] = useState("");

  return (
    <div style={{ display: "flex", direction: "rtl" }}>
      <Form
        setCityName={setCityName}
        setStreetName={setStreetName}
        setHomeNum={setHomeNum}
        homeNum={homeNum}
      />
      <Map cityName={cityName} streetName={streetName} homeNum={homeNum} />
    </div>
  );
}

export default MainPage;
