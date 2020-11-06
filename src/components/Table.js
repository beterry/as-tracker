import React, { Component } from 'react';

export default class Table extends Component {

    render() {
        return (
            <section className="table">
                <div className="table-filters">
                    <div className="table-filters_tabs">
                        <button className="table-tab">Weekly</button>
                        <button className="table-tab">Monthly</button>
                    </div>
                    <form className="table-filters_form">
                        <div>
                            <label className="mr-s" htmlFor="start">Art Due Start Date</label>
                            <input type="date" id="start" name="start" defaultValue="2020-11-02" />
                            <label className="mx-s" htmlFor="end">to</label>
                            <input type="date" id="end" name="end" defaultValue="2020-11-14" />
                        </div>
                        <div>
                            <select defaultValue="all">
                                <option value="all">All Specialists</option>
                                <option value="LucasT">Lucas Templin</option>
                                <option value="TarrynG">Tarryn Hendel</option>
                                <option value="SaraP">Sara Putt</option>
                            </select>
                        </div>
                        <div>
                            <select id="label" name="label" defaultValue="all">
                                <option value="all">All Client Types</option>
                                <option value="marcos">marcos</option>
                                <option value="fox">fox</option>
                            </select>
                        </div>
                        <div>
                            <input type="checkbox" id="hide" name="hide" readOnly checked />
                            <label htmlFor="hide">Hide Completed</label>
                        </div>
                        <div>
                            <input placeholder="Client name" type="search" />
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                
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
                                <th onClick={() => this.props.handleHeaderClick("status")}>Proof - Print - Map</th>
                            </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                    </table>
                </div>
            </section>
        )
    }
}
