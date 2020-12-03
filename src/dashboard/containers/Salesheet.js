import React from "react";
import Panel from "../components/Panel";
import {
    Col, Row
} from "reactstrap";

import Weather from "../components/Weather";

class Salesheet extends React.Component {
    state = {
        panelData: [
            { title: "Salman Bukhari", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            { title: "Ketly", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "},
            { title: "Levi Dinnerman", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
            { title: "Levi Dinnerman", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
            { title: "Levi Dinnerman", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
            { title: "Levi Dinnerman", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
        ],
        weathers: [
            {title: "High level clouds", degrees: "F", temprature: "68", city: "Islamabad", country: "Pakistan", flag: "clear"},
            {title: "Morning clouds.", degrees: "C", temprature: "28", city: "Florida", country: "USA", flag: "rainy"}
        ]
    }


    render () {
        return (
            <Weather weathers={this.state.weathers} />
        );
    }
}

export default Salesheet;