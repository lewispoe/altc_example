import React from "react";
import "./css/table.css"

const Results = ({rows}) => {
    const mapRows = () => rows.map(row => <tr key={row.id}><td>{row.id}</td><td>{row.name}</td><td>{row.cost}</td></tr>);
    return (
        <section className="results">
            <h3>Results....</h3>
            {
                (rows.length === 0)
                    ? <div></div>
                    : (<table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Cost</th>
                            </tr>
                            </thead>
                            <tbody>
                            {mapRows()}
                            </tbody>
                        </table>
                    )
            }

        </section>
    );
}

export default Results;
