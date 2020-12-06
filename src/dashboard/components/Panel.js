import React from "react";
import Weather from "../components/Weather";

const Panel = ({title, description, location, weather}) => {
    return (<div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Weather weathers={weather} location={location} />
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>)
}

export default Panel;