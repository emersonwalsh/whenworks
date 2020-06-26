import React from 'react';
import TopBar from './../top-bar';


export default function Results(props) {

    // TODO find trip from database and get results


    return (
        <header className="app-content">
            <TopBar />

            <h1>Results</h1>
            <p>Trip Name</p>
            <p># of Responses</p>
            <p>Heatmap, Table (Date, # unavailable)</p>
            <p>Share Options</p>

        </header>
    );
}
