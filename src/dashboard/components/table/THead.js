import React from "react";
import THeadList from "./THeadList";

const THead = ({tHeadData}) => {
    return (
        <thead>
            {Array.isArray ( tHeadData ) && tHeadData.length > 0 && tHeadData.map((item, i) => <THeadList thName={item.value}/>)}
        </thead>
    );
}

export default THead;