import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Data from "./components/Data";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  
  // async function getWeather() {
  //   const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Hisar&APPID=2a95407562161c907213d3c692c06e9a");
  //   setCityDetails(response.data);
  // }
  // useEffect(() => {
  //   getWeather();
  //   console.log(cityDetails);
  // }, [cityName])

  // getWeather();

  // console.log(cityDetails);

  const [cityName, setCityName] = useState("");
  const [cityDetails, setCityDetails] = useState(null);

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () =>{
    async function initialData(){
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Adak&APPID=2a95407562161c907213d3c692c06e9a");
      setCityDetails(response.data);
      setIsClicked(!isClicked);
      console.log(cityDetails);
    }
    initialData();
  }

  useEffect(() => {
    async function getWeather() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Hisar&APPID=2a95407562161c907213d3c692c06e9a`);
      setCityDetails(response.data);
      console.log(cityDetails);
    }
    getWeather();

  }, [cityName]);


  return (
    <div>
      {!isClicked && <Card>
        <Home clickHandler={clickHandler} />
      </Card>}
      {isClicked && <Card>
        <Form setCityName={setCityName} />
        <Data cityDetails={cityDetails} />
      </Card>}
    </div>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=2a95407562161c907213d3c692c06e9a