import React from "react";


const Selection = props => {
 
    return (
        <div style={{ marginLeft: "24px" }}>
            <label>{props.name}</label>
            <select id={props.id} onChange={(event) => props.onChange(event)}>
                <option defaultValue>Pick...</option>
                {props.stations.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
            </select>
        </div>

    );

}


export default Selection;