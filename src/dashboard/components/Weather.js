import React from "react";
import Sunny from "./weathers/Sunny";
import Rainy from "./weathers/Rainy";

const Weather = ({weathers}) => {
    return (
        <div class="container">
            <div class="row">
                {weathers.map(weather => 
                <div class="col">
                    {weather.flag === "clear" ? <Sunny {...weather}/> : <Rainy />}
                </div>)}
            </div>
        </div>
    );
}

export default Weather;