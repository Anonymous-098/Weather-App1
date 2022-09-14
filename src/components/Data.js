import React, { useEffect, useState } from "react";
import { TbTemperature, TbWind, TbTemperatureCelsius } from "react-icons/tb"
import { WiHumidity } from "react-icons/wi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import classes from "./Data.module.css";
import rain from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/rain.svg";
import clear_sky from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/clear-day.svg";
import few_clouds from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/partly-cloudy-day.svg";
import snow from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/snow.svg";
import mist from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/mist.svg";
import thunderstorm from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/thunderstorms.svg";
import broken_clouds from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/overcast.svg";
import scattered_clouds from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/cloudy.svg"
import shower_rain from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/hail.svg";
import haze from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/haze.svg";
import thermometer from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/thermometer.svg";
import raindrop from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/raindrop.svg";
import wind from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/wind.svg";
import celsius from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/celsius.svg";
import fahrenheit from "../icons/weather-icons-master/weather-icons-master/design/fill/animation-ready/fahrenheit.svg";

const Data = (props) => {
    var data = props.cityDetails;
    var date = data.date_time_wti.slice(0, 16);
    var time = data.time_12;
    var city = data.name;
    var country = data.sys.country;
    var weather = data.weather[0].description;
    var temperature = (data.main.temp - 273.15).toFixed(0);
    var windSpeed = data.wind.speed.toFixed(0);
    var humidity = data.main.humidity;
    var real_feel = (data.main.feels_like-273.15).toFixed(0);
    var high = (data.main.temp_max - 273.15).toFixed(0);
    var low = (data.main.temp_min - 273.15).toFixed(0);
    var temp;

    if (weather === "clear sky") {
        temp = clear_sky;
    }
    else if (weather === "few clouds") {
        temp = few_clouds;
    }
    else if (weather === "scattered clouds") {
        temp = scattered_clouds;
    }
    else if (weather === "broken clouds" || weather === "overcast clouds") {
        temp = broken_clouds;
    }
    else if (weather === "shower rain" || weather==="light intensity drizzle" ) {
        temp = shower_rain;
    }
    else if (weather === "rain" || weather === "light rain" || weather==="moderate rain") {
        temp = rain;
    }
    else if (weather === "thunderstorm") {
        temp = thunderstorm;
    }
    else if (weather === "snow") {
        temp = snow;
    }
    else if (weather === "mist") {
        temp = mist;
    }
    else if (weather === "haze") {
        temp = haze;
    }

    return (
        <div className={classes.dataContainer}>
            <div className={classes.dateTime}>
                <span>{date} | Local Time: {time}</span>
            </div>
            <div className={classes.city}>
                <span>{city}, {country}</span>
            </div>
            <div className={classes.weather}>
                <span>{weather}</span>
            </div>
            <div className={classes.weatherData}>
                <img src={temp} className={classes.animation}></img>
                <span className={classes.tempValue}>{temperature}<img src={celsius} className={classes.celsius}></img></span>
                <div className={classes.desc}>
                    <span><img src={thermometer}></img>Real feel : {real_feel} <sup className={classes.degree}>o</sup></span>
                    <span><img src={raindrop}></img>Humidity : {humidity}%</span>
                    <span><img src={wind}></img>Wind : {windSpeed}km/h</span>
                </div>
            </div>
            <div>
                <span className={classes.high_low}>
                    <FaArrowUp className={classes.highIcon} /><span className={classes.wordWeight}>High : </span>{high}<sup className={classes.degree}>o</sup><span className={classes.line}>|</span><FaArrowDown className={classes.lowIcon} /> <span className={classes.wordWeight}>Low :</span>{low}<sup className={classes.degree}>o</sup>
                </span>
            </div>
        </div>
    );
}

export default Data;