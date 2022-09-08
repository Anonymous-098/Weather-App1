import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Data from "./components/Data";
import Form from "./components/Form";

const App = () => {

  const [cityName, setCityName] = useState("Hisar");
  const [cityDetails, setCityDetails] = useState(null);

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


  useEffect(()=>{
    async function getWeather(){
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Hisar&APPID=2a95407562161c907213d3c692c06e9a");
      setCityDetails(response.data);
    }
    getWeather();
    
    console.log(cityDetails);
  },[cityName]);


  return (
    <div>
      <Card>
        <Form setCityName={setCityName} />
        <Data />
      </Card>
    </div>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=2a95407562161c907213d3c692c06e9a