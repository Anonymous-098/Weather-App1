import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Data from "./components/Data";
import Form from "./components/Form";
import Home from "./components/Home";
import { InfinitySpin } from "react-loader-spinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Card>
        <Home />
      </Card>
    </div>
  );
}

export default App;