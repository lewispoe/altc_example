import React, {useEffect, useState} from "react";
import Selection from "../components/Selection";


const SelectionHandler = ({name}) => {
    const [stations, updateStations]  = useState( []);

    useEffect(
        console.log("TODO - add a REST call here....")
        , []);

    return <Selection id={name + '-station'} name={name} options={stations}/>

}


export default SelectionHandler;