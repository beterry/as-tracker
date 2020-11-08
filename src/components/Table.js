import React, { Component } from 'react';

export default class Table extends Component {

    render() {
        return (
            <section className="table">
                <div className="table-container">
                    <table border="1">
                        <thead>
                            <tr>
                                <th><input type="checkbox" readOnly/></th>
                                <th onClick={() => this.props.handleHeaderClick("push")}>Psh</th>
                                <th onClick={() => this.props.handleHeaderClick("group")}>Grp</th>
                                <th onClick={() => this.props.handleHeaderClick("timezone")}>TZ</th>
                                <th onClick={() => this.props.handleHeaderClick("code")}>Code</th>
                                <th onClick={() => this.props.handleHeaderClick("company")}>Company</th>
                                <th onClick={() => this.props.handleHeaderClick("product")}>Product</th>
                                <th onClick={() => this.props.handleHeaderClick("scheduledTasks")}>Scheduled Task</th>
                                <th onClick={() => this.props.handleHeaderClick("lastAction")}>Last Action</th>
                                <th>V#</th>
                                <th>Options</th>
                                <th onClick={() => this.props.handleHeaderClick("quantity")}>Qty</th>
                                <th onClick={() => this.props.handleHeaderClick("weeks")}>Wks</th>
                                <th onClick={() => this.props.handleHeaderClick("specialist")}>Spec</th>
                                <th>Note</th>
                                <th 
                                    onClick={() => this.props.handleHeaderClick("status")}
                                    className="col-pbar"
                                >
                                    <div className="pbar">
                                        <p className="pbar-bar">Proof</p>
                                        <p className="pbar-bar">Print</p>
                                        <p className="pbar-bar">Map</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                    </table>
                </div>
            </section>
        )
    }
}
