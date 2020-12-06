import React from "react";
import Sunny from "./weathers/Sunny";
import Rainy from "./weathers/Rainy";

const Weather = ({weathers, location}) => {
    let weatherWidget = "";
    if (Array.isArray(weathers) && weathers.length > 0 ) {
        weathers.forEach(weather => {
            if (location === weather.city) {
                if (weather.flag === "clear") {
                    weatherWidget = <Sunny {...weather}/>
                }else{
                    weatherWidget = <Rainy {...weather}/>
                }
            }
        })
    } 

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    {weatherWidget}
                </div>
            </div>
        </div>
    );
}

export default Weather;