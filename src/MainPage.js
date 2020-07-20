import React, { useState } from "react";

import Selection from "./components/Selection";
import Results from "./Results";
import Error from "./Error";


const MainPage = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [from_station_id, setFromStation] = useState(null);
    const [to_station_id, setToStation] = useState(null);

    //TODO - implement a validation method of stations, simple thing like, don't pick same FROM/TO station!
    //Consider how you will manage the state of the choice in the Selection of the station from the sub-component
    const isValid = () => undefined



    const click = () => {
        if (isValid()) {
            setResults([{ id: 1, name: "fast", cost: "£300" }, { id: 2, name: "medium", cost: "£200" }, { id: 3, name: "slow", cost: "£100" }]);
        } else {
            setError('Not a valid search');
        }
    }

    return (
        
        <div className="main grid-top-container">
            <h1>From: { from_station_id }</h1>
        <h1>To: { to_station_id }</h1>
            <section className="search">
                <h3>Ticket Selection</h3>
                <div className="inputs">
                    <Selection onChange={value => setFromStation(value)} id="from-station" name="From: " options={[{ value: 1, label: "Penzance" }, { value: 2, label: "Redruth" }, { value: 3, label: "Camborne" }]} />
                    <Selection onChange={value => setToStation(value)} id="to-station" name="To: " options={[{ value: 4, label: "St Austell" }, { value: 5, label: "Redruth" }, { value: 6, label: "Plymouth" }, { value: 7, label: "London" }]} />
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