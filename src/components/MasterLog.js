import React from 'react'
import {useParams} from "react-router-dom";

const LogRow = ({task}) => {
    return (
        <tr>
            <td>{task.date.format("MM-DD-YYYY")}</td>
            <td>{task.date.format("hh:mma")}</td>
            <td>{task.action}</td>
            <td>{task.who}</td>
            <td>{task.what}</td>
            <td>{task.actionTaken}</td>
            <td></td>
        </tr>
    )
}

const MasterLog = ({jobs}) => {

    let {id} = useParams();
    const job = jobs.find(job => job.id === Number(id));

    const {company, product, lineNumber, code, lastActions} = job

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
                        <button className="action-button">Order Line</button>
                        <button className="action-button">Email</button>
                        <button className="action-button">Print</button>
                    </div>
                </div>
            </div>
            <div className="table-container">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                            <th>Who</th>
                            <th>What</th>
                            <th>Action Taken</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lastActions.map((task, index) => 
                            <LogRow key={`log action ${index}`} task={task} />
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default MasterLog;