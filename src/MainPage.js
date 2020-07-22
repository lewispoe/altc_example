import React, { useState } from "react";

import Results from "./Results";
import Error from "./Error";
import SelectionHandler  from './stations/SelectionHandler';
import requestHelper from './helpers/request-helper';

const MainPage = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [from_station_id, setFromStation] = useState(null);
    const [to_station_id, setToStation] = useState(null);

    const isValid = () => {
        
        if (isNaN(parseInt(from_station_id))) {
            setError('Departure Station Not Set');
            return false;
        } else if (isNaN(parseInt(to_station_id))) {
            setError('Arrival Station Not Set');
            return false;
        } else if (from_station_id === to_station_id) {
            setError('Departure station cannot be the same as Arrival Station');
            return false;
        }
        setError(null);
        return true;
    }

    const click = () => {
        if (isValid()) {
            requestHelper.getTicketTypes().then(res=>{
                setResults(res.data.records)
            })
        } 
    }

    return (

        <div className="main grid-top-container">
            <section className="search">
                <h3>Ticket Selection</h3>
                <div className="inputs">
                    <SelectionHandler id="from-station" onChange={value => setFromStation(value)} name="From: " />
                    <SelectionHandler id="to-station" onChange={value => setToStation(value)} name="To: " />
                </div>
                <hr />
                <div>
                    <button className="penca-button" onClick={click}>Find Times And Tickets</button>
                </div>
            </section>

            {(error) ? <Error text={error} /> : <Results rows={results} />}

        </div>
    );


}

export default MainPage;