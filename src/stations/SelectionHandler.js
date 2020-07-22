import React, { useEffect, useState } from "react";
import Selection from "../components/Selection";
import requestHelper from '../helpers/request-helper';


const SelectionHandler = (props) => {
    const [stations, updateStations] = useState([]);

    const handleChange = (e) => {
        props.onChange(e.target.value)
    }

    useEffect(() => {
        requestHelper.getStations().then(res => {
            updateStations(res.data.records);
        })
    }, []);

    return <Selection id={props.id} name={props.name} stations={stations} onChange={handleChange} />

}


export default SelectionHandler;