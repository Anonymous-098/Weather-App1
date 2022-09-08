import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Data from "./components/Data";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  const [cityDetails, setCityDetails] = useState(null);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      {!isClicked && <Card>
        <Home setIsClicked={setIsClicked} isClicked={isClicked} setCityDetails={setCityDetails} />
      </Card>}
      {isClicked && <Card>
        <Form setCityDetails={setCityDetails} />
        <Data cityDetails={cityDetails} />
      </Card>}
    </div>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=2a95407562161c907213d3c692c06e9a
// https://api.ipgeolocation.io/timezone?apiKey=c660ea76f4674b9e98448b50ae4371d2&location=Hisar