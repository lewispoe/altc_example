import React from "react";


const Selection = props => {
  
    return (
        <div style={{ marginLeft: "24px" }}>
            <label>{props.name}</label>
            <select id={props.id} onChange={(event) => props.onChange(event.target.value)}>
                <option selected>Pick...</option>
                {props.options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
        </div>

    );

}


export default Selection;