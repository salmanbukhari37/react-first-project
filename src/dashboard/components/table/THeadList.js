import React from "react";

const THeadList = (props) => {
    return (
        <th>{props.thName.toUpperCase()}</th>
    );
}

export default THeadList;