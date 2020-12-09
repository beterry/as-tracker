import React, { Component } from 'react';
import moment from 'moment'

import ProgressBar from './ProgressBar';

import noteImg from '../images/books.gif';
import iconSystem from '../images/icon-system.svg';
import iconEmail from '../images/icon-email.svg';
import iconCall from '../images/icon-call.svg';
import iconLate from '../images/icon-late.svg';

import {compareDatesDesc, compareDatesAsc} from '../util/sortJobs';

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
                <span
                    style={{color: task.actionTaken === "" && moment().isAfter(task.date) ? "red" : "black"}}
                >
                    {time}
                </span>
            </div>
            <div style={{flexGrow: 1}} />
            {!task.actionTaken && moment().isAfter(task.date) ? <img src={iconLate} alt={task.action} className="task-cell_late"/> : null}
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
            note,
            printOnly,
        } = this.props.job

        const sortedScheduledTasks = [...scheduledTasks];
        
        //sort scheduled tasks in cell
        if (this.props.sortBy === "scheduledTasks"){
            sortedScheduledTasks.sort((a,b) => {
                if (a.date && b.date){
                    if (this.props.sortDirection){
                        return compareDatesDesc(a.date, b.date)
                    } else {
                        return compareDatesAsc(a.date, b.date)
                    }
                } else {
                    return 0;
                }
            });
        }        

        return (
            <tr
                style={{background: this.props.selected && "#65FFFF"}}
            >
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
                    {sortedScheduledTasks.map((task, index) => <TaskCell task={task} key={`${id} scheduled ${index}`}/>)}
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
                <td className="col-pbar"><ProgressBar status={status} lastActions={lastActions} printOnly={printOnly}/></td>
            </tr>
        )
    }
}
