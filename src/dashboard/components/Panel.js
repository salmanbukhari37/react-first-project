import React from "react";

const Panel = ({data}) => {
    // console.log("data:", data)
    return (<div className="card">
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>)
}

export default Panel;