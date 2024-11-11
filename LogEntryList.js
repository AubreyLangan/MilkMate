import React from "react";

const LogEntryList = ({ entries }) => (
    <div>
        <h2>Pumping Log</h2>
        <ul>
            {entries.map((entry) => (
                <li key={entry.id}>
                    <p>Date: {entry.date}</p>
                    <p>Time: {entry.time}</p>
                    <p>Quantity: {entry.quantity}</p>
                    <p>Notes: {entry.notes}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default LogEntryList;