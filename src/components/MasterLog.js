import React, {useState} from 'react';
import {useParams} from "react-router-dom";

import sortTasks from '../util/sortTasks'

import noteImg from '../images/books.gif';

const LogRow = ({task}) => {
    return (
        <tr>
            <td>{task.date.format("MM-DD-YYYY")}</td>
            <td>{task.date.format("hh:mma")}</td>
            <td>{task.action}</td>
            <td>{task.who}</td>
            <td>{task.what}</td>
            <td>{task.actionTaken}</td>
            <td>{task.completedBy}</td>
            <td className="log-col_note"><img src={noteImg} alt="Note"/></td>
        </tr>
    )
}

const handleLogButton = (e, message) => {
    e.preventDefault();
    alert(message);
}

const MasterLog = ({jobs}) => {
    const [sortBy, setSortBy] = useState("date");
    const [sortDirection, setSortDirection] = useState(true);

    let {id} = useParams();
    const job = jobs.find(job => job.id === Number(id));

    if (!job){
        return <div>No job found</div>;
    }

    const {company, product, lineNumber, code, lastActions} = job
    const sortedLastActions = sortTasks(sortBy, lastActions, sortDirection);

    const handleSortChange = (newSortBy) => {
        if (sortBy === newSortBy){
            setSortDirection(!sortDirection);
        } else {
            setSortBy(newSortBy);
            setSortDirection(true);
        }
    }

    return (
        <section>
            <div className="log-controls">
                <div className="log-controls_left">
                    <div className="info-box">
                        <h3>{company}</h3>
                        <p>{`${product} (Line ${lineNumber})`}</p>
                        <p>{code}</p>
                    </div>
                    <div className="log-controls_buttons">
                        <button className="action-button" onClick={(e) => handleLogButton(e, "Open order line")}>Order Line</button>
                        <button className="action-button" onClick={(e) => handleLogButton(e, "Outlook pop-up")}>Email</button>
                        <button className="action-button" onClick={(e) => handleLogButton(e, "Open print version")}>Print</button>
                    </div>
                </div>
            </div>
            <div className="table-container">
                <table border="1">
                    <thead>
                        <tr>
                            <th onClick={() => handleSortChange("date")}>Date</th>
                            <th onClick={() => handleSortChange("date")}>Time</th>
                            <th onClick={() => handleSortChange("action")}>Type</th>
                            <th onClick={() => handleSortChange("who")}>Who</th>
                            <th onClick={() => handleSortChange("what")}>What</th>
                            <th onClick={() => handleSortChange("actionTaken")}>Action</th>
                            <th onClick={() => handleSortChange("completedBy")}>Completed By</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedLastActions.map((task, index) => 
                            <LogRow key={`log action ${index}`} task={task} />
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default MasterLog;