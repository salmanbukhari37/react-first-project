import React from "react";

const Button = (props) => {
    return (<button className={props.clsName} onClick={props.changeHandler}>{props.btnText}</button>);
}

export default Button;
