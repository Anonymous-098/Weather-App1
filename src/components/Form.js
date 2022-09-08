import React, { useState } from "react";
import classes from "./Form.module.css";
import {FaSearch} from "react-icons/fa";

const Form = (props) => {

    const [value,setValue] = useState("");

    const inputHandler = (e) =>{
        setValue(e.target.value);
    }
    
    const submitHandler = (e) =>{
        e.preventDefault();
        props.setCityName(value);
        setValue("");
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <input className={classes.input} type="text" placeholder="Search for a city here" onChange={inputHandler} value={value} ></input>
        <button type="submit" className={classes.icon} ><FaSearch /></button>
    </form>
}

export default Form;