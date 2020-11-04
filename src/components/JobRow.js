import React, { Component } from 'react';

const TaskCell = ({task}) => {
    const taskName = `${task.action} ${task.who}: ${task.what}`;
    const time = task.date.format('M-D-YY h:mma');
    return (
        <div><strong>{taskName}</strong><br />{time}</div>
    )
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
            version,
            options,
            quantity,
            mailWeeks,
            acctSpecialist, 
            scheduledTasks,
            lastActions
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
                <td>{company}</td>
                <td>{product}</td>
                <td>
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
                <td>Note</td>
                <td>Proof - Print - Map</td>
            </tr>
        )
    }
}
