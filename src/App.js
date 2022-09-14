import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Data from "./components/Data";
import Form from "./components/Form";
import Home from "./components/Home";
import { InfinitySpin } from "react-loader-spinner";

const App = () => {
  const [cityDetails, setCityDetails] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {!isClicked && <Card>
        <Home setIsClicked={setIsClicked} isClicked={isClicked} setCityDetails={setCityDetails} />
      </Card>}
      {isClicked && <Card>
        <Form setCityDetails={setCityDetails} setIsLoading={setIsLoading} />
        {isLoading && <InfinitySpin />}
        {!isLoading && <Data cityDetails={cityDetails} />}
      </Card>}
    </div>
  );
}

export default App;