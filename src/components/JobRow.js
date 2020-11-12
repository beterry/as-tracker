import React, { Component } from 'react';

import ProgressBar from './ProgressBar';

import noteImg from '../images/books.gif';
import iconSystem from '../images/icon-system.svg'
import iconEmail from '../images/icon-email.svg'
import iconCall from '../images/icon-call.svg'

const TaskCell = ({task}) => {
    let taskName = "";
    let src;
    if (task.actionTaken === ""){
        taskName = `${task.who}: ${task.what}`;
        if (task.action === "Email"){
            src = iconEmail;
        } else if (task.action === "Call"){
            src = iconCall;
        } else {
            src = iconSystem;
        }
    } else {
        taskName = task.actionTaken
    }
    
    const time = task.date.format('M-D-YY h:mma');
    
    return (
        <div className="task-cell">
            {task.actionTaken ? null : <img src={src} alt={task.action}/>} 
            <div>
                <strong>{taskName}</strong>
                <br />
                {time}
            </div>
            
        </div>
    )
}

const displayNote = (e, note) => {
    e.preventDefault();
    alert(`Note: ${note}`);
}

const openAlert = (e, message) => {
    e.preventDefault();
    alert(message);
}

export default class JobRow extends Component {

    render() {
        const {
            id,
            push,
            group,
            timezone,
            code,
            company,
            product,
            address,
            version,
            options,
            quantity,
            mailWeeks,
            acctSpecialist, 
            scheduledTasks,
            lastActions,
            status,
            proofs,
            prints,
            note,
        } = this.props.job
        return (
            <tr className={this.props.selected ? "row-selected" : ""}>
                <td>
                    <input
                        type="checkbox"
                        checked={this.props.selected}
                        onChange={this.props.handleCheckbox}
                    />
                </td>
                <td>{push}</td>
                <td>{group}</td>
                <td>{timezone}</td>
                <td>{code}</td>
                <td
                    className="col-link"
                    onClick={(e) => openAlert(e, `Open order line in new tab, jump to contact info: ${company}`)}
                >
                    <div className="tooltip">
                        {company}
                        <span className="tooltip-text">{address}</span>
                    </div>
                </td>
                <td
                    className="col-link"
                    onClick={(e) => openAlert(e, `Open order line in new tab: ${company}`)}
                >
                    {product}
                </td>
                <td
                    onClick={this.props.openSchedulerFromLine}
                    className="col-scheduled"
                >
                    {scheduledTasks.map((task, index) => <TaskCell task={task} key={`${id} scheduled ${index}`}/>)}
                </td>
                <td>
                    <TaskCell task={lastActions[0]} />
                </td>
                <td>{version}</td>
                <td>{options}</td>
                <td>{quantity}</td>
                <td>{mailWeeks}</td>
                <td>{acctSpecialist}</td>
                <td
                    onClick={(e) => displayNote(e, note)}
                >
                    <img src={noteImg} alt="Note"/>
                </td>
                <td className="col-pbar"><ProgressBar status={status} lastActions={lastActions} proofs={proofs} prints={prints}/></td>
            </tr>
        )
    }
}
