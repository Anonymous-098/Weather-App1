import React from "react";
import classes from "./Home.module.css";
import axios from "axios";

const Home = (props) => {

    const clickHandler = () => {
        async function initialData() {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Hisar&APPID=2a95407562161c907213d3c692c06e9a");
            const response1 = await axios.get("https://api.ipgeolocation.io/timezone?apiKey=c660ea76f4674b9e98448b50ae4371d2&location=Hisar");
            var weather_det = response.data;
            var date_time_det = response1.data;
            var all_det = {
                ...weather_det,
                ...date_time_det
            }
            props.setIsClicked(!props.isClicked);
            props.setCityDetails(all_det);

        }
        initialData();
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Weather App</h1>
            <button className={classes.btn} onClick={clickHandler} >Get Started</button>
        </div>
    );
}

export default Home;