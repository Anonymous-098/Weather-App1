import React from "react";
import {TbTemperature,TbWind,TbTemperatureCelsius} from "react-icons/tb"
import {WiHumidity} from "react-icons/wi";
import {FaArrowUp,FaArrowDown} from "react-icons/fa"

const Data = (props) => {
    // console.log(props.cityDetails);
    var data = props.cityDetails;
    var temp = new Date(data.dt*1000);

    var date = temp.toDateString();
    // console.log(date);
    // var time = temp.toTimeString();
    var time = temp.toLocaleTimeString();
    // console.log(time);

    return(
        <div>
            <div>
                <p>{date} | {time}</p>
            </div>
        </div>
    );
}

export default Data;