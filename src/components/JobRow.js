import React, { Component } from 'react';

export default class JobRow extends Component {

    render() {
        const {
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
            acctSpecialist
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
                <td>Scheduled Task</td>
                <td>Last Action</td>
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
