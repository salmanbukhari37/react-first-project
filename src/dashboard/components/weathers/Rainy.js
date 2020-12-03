import React from "react";

const Rainy = () => {
    return (
        <div class="weather-card rain">
            <div class="top">
                <div class="wrapper">
                    <div class="mynav">
                        <a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
                        <a href="javascript:;"><span class="lnr lnr-cog"></span></a>
                    </div>
                    <h1 class="heading">Rainy day</h1>
                    <h3 class="location">Sylhet, Bangladesh</h3>
                    <p class="temp">
                        <span class="temp-value">16</span>
                        <span class="deg">0</span>
                        <a href="javascript:;"><span class="temp-type">C</span></a>
                    </p>
                </div>
            </div>
            <div class="bottom">
                <div class="wrapper">
                    <ul class="forecast">
                        <a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
                        <li class="active">
                            <span class="date">Yesterday</span>
                            <span class="lnr lnr-sun condition">
                                <span class="temp">22<span class="deg">0</span><span class="temp-type">C</span></span>
                            </span>
                        </li>
                        <li>
                            <span class="date">Tomorrow</span>
                            <span class="lnr lnr-cloud condition">
                                <span class="temp">18<span class="deg">0</span><span class="temp-type">C</span></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Rainy;