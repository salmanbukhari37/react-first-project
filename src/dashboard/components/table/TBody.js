import React from "react";
import TBodyList from "./TBodyList";

const TBody = ({tBodyData, tHeadData}) => {
    console.log(tHeadData);
    return (
        <tbody>
            {Array.isArray(tBodyData) && tBodyData.length > 0 && tBodyData.map(({rollNumber, name, email, phone, semester, year, batch, gpa}) => {
                return (
                    <tr>
                        <TBodyList tdName={rollNumber}/>
                        <TBodyList tdName={name}/>
                        <TBodyList tdName={email}/>
                        <TBodyList tdName={phone}/>
                        <TBodyList tdName={semester}/>
                        <TBodyList tdName={year}/>
                        <TBodyList tdName={batch}/>
                        <TBodyList tdName={gpa}/>
                    </tr>)
            })}
        </tbody>
    );
}

export default TBody;