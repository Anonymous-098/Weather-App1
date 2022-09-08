import React from "react";
import classes from "./Home.module.css";

const Home = (props) => {
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Weather App</h1>
            <button className={classes.btn} onClick={props.clickHandler} >Get Started</button>
        </div>
    );
}

export default Home;