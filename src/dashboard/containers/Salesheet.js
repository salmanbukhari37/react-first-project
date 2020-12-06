import React from "react";
import Panel from "../components/Panel";
import {
    Col, Row
} from "reactstrap";

import Weather from "../components/Weather";

class Salesheet extends React.Component {
    state = {
        panelData: [
            { title: "Salman Bukhari", location:"Islamabad", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            { title: "Ketly", location:"Florida", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
            { title: "Levi Dinnerman", location:"Florida", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
            { title: "Levi Dinnerman", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
            { title: "Levi Dinnerman", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
            { title: "Levi Dinnerman", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
        ],
        weathers: [
            {
                title: "High level clouds", 
                degrees: "F", 
                temperature: "68", 
                city: "Islamabad", 
                country: "Pakistan", 
                flag: "clear",
                futureDaysData: [
                    {
                        day: "Yesterday",
                        temperature: 23,
                        degrees: "C",
                        weatherClass: "lnr lnr-sun condition"
                    },
                    {
                        day: "Tomorrow",
                        temperature: 21,
                        degrees: "C",
                        weatherClass: "lnr lnr-cloud condition"
                    },
                    {
                        day: "Last night",
                        temperature: 31,
                        degrees: "C",
                        weatherClass: "lnr lnr-cloud condition"
                    },
                ]
            },
            {
                title: "Morning clouds.", 
                degrees: "C", 
                temperature: "28", 
                city: "Florida", 
                country: "USA", 
                flag: "rainy"
            }
        ]
    }


    render () {
        console.log(this.state.panelData);
        return (
            <div>

                <Weather weathers={this.state.weathers} />
                {Array.isArray(this.state.panelData) && this.state.panelData.length > 0 && this.state.panelData.map( ({title, description, location}) => <Panel location={location} title={title} description={description} weather={this.state.weathers}/>)}
            </div>
        );
    }
}

export default Salesheet;