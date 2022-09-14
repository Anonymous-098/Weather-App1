import React from "react";
import classes from "./Home.module.css";
import axios from "axios";
import { useState } from "react";
import Form from "./Form";
import { InfinitySpin } from "react-loader-spinner";

const Home = (props) => {

    const [cityDetails, setCityDetails] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const clickHandler = () => {
        setIsLoading(true);
        async function initialData() {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Hisar&APPID=2a95407562161c907213d3c692c06e9a");
            const response1 = await axios.get("https://api.ipgeolocation.io/timezone?apiKey=c660ea76f4674b9e98448b50ae4371d2&location=Hisar");
            const response2 = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Hisar&appid=2a95407562161c907213d3c692c06e9a");

            var weather_det = response.data;
            var date_time_det = response1.data;
            var forecast = response2.data;
            var all_det = {
                ...weather_det,
                ...date_time_det,
                ...forecast
            }
            setIsClicked(!isClicked);
            setCityDetails(all_det);
            setIsLoading(false);
        }
        initialData();
    }

    return (
        <div>
            {!isClicked && !isLoading && <div className={classes.container}>
                <h1 className={classes.heading}>Weather App</h1>
                <button className={classes.btn} onClick={clickHandler} >Get Started</button>
            </div>}
            {isLoading && <InfinitySpin color="#ffffff" />}
            {isClicked && !isLoading && <Form cityDetails={cityDetails} setCityDetails={setCityDetails} />}
        </div>
    );
}

export default Home;