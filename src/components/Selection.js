import React from "react";

const Selection = ({id, name, options}) => {

    return (
        <div style={{marginLeft:"24px"}}>
            <label>{name}</label>
            <select id={id}>
                <option selected>Pick...</option>
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
        </div>

    );

}


export default Selection;