import React from "react";
import Panel from "../Panel";

const Sunny = ({title, city, country, temperature, degrees, futureDaysData}) => {
    return (<div class="weather-card one">
                <div class="top">
                    <div class="wrapper">
                        <div class="mynav">
                            {/* <a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
                            <a href="javascript:;"><span class="lnr lnr-cog"></span></a> */}
                        </div>
                        <h1 class="heading">{title}</h1>
                        <h3 class="location">{city}, {country}</h3>
                        <p class="temp">
                            <span class="temp-value">{temperature}</span>
                            <span class="deg">0</span>
                            <a href="javascript:;"><span class="temp-type">{degrees}</span></a>
                        </p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="wrapper">
                        <ul class="forecast">
                            <a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
                            {Array.isArray(futureDaysData) && futureDaysData.length > 0 && futureDaysData.map(({day, temperature, degrees, weatherClass}, index) => <li class={index < 1 ? "active" : ""}>
                                <span class="date">{day}</span>
                                <span class={weatherClass}>
                                <span class="temp">{temperature}<span class="deg">0</span><span class="temp-type">{degrees}</span></span>
                                </span>
                            </li>)}
                            
                        </ul>
                    </div>
                </div>
                {/* <Panel title={title} description={city}/> */}
            </div>);
}

export default Sunny;