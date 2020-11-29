import React from "react";
import TBody from "./table/TBody";
import THead from "./table/THead";

// table headings
// table body loop those data


const Table = ({tHead, tBody}) => {
    // props: {tHead: [...]}
    return (
        <table className="table">
            <THead tHeadData={tHead} />
            <TBody tBodyData={tBody} tHeadData={tHead} />
        </table>
    );
}

export default Table;