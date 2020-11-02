import React, { Component } from 'react'

export default class Controls extends Component {
    render() {
        return (
            <form className="controls">
                <h1>Account Specialist Tracking Report</h1>
                <div className="controls-init">
                    <div>
                        <label htmlFor="specialist">Acct Specialist</label>
                        <select id="specialist" name="specialist" type="">
                            <option value="LucasT">Lucas Templin</option>
                            <option value="TarrynG">Tarryn Hendel</option>
                            <option value="SaraP">Sara Putt</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="start">Art Due Start Date</label>
                        <input type="date" id="start" name="start-date" defaultValue="2020-11-02" />
                        <label htmlFor="end" className="middle">to</label>
                        <input type="date" id="end" name="end-date" defaultValue="2020-11-14" />
                    </div>
                    <div>
                        <button>Go</button>
                        <button>Print Report</button>
                    </div>
                </div>
                <div className="controls-main__container">
                    <div className="controls-main__form">
                        <div className="single-options">
                            <button>Quicklink<br/>Order Line</button>
                            <div>
                                <button>Schedule Task</button>
                                <button>Master Log</button>
                            </div>
                        </div>
                        <div className="multi-actions">
                            <div>
                                <select id="action" name="action" defaultValue="default">
                                    <option value="default" disabled>Action</option>
                                    <option value="art-approve">Art Approved</option>
                                    <option value="art-unapprove">Art Unapproved</option>
                                    <option value="map-approve">Map Approved</option>
                                    <option value="map-unapprove">Map Unapproved</option>
                                </select>
                                <button>Apply</button>
                            </div>
                            <div>
                                <input placeholder="Filter Label" type="text" />
                                <button>Add</button>
                            </div>
                            <div>
                                <select id="reassign" name="reassign">
                                    <option value="LucasT">Lucas Templin</option>
                                    <option value="TarrynG">Tarryn Hendel</option>
                                    <option value="SaraP">Sara Putt</option>
                                </select>
                                <button>Reassign</button>
                            </div>
                        </div>
                        <div className="filters">
                            <div>
                                <input placeholder="Client name" type="text" />
                                <button>Search</button>
                            </div>
                            <div className="hide-complete">
                                <input type="checkbox" id="hide-complete" name="hide-complete" readOnly checked />
                                <label htmlFor="hide-complete">Hide Completed</label>
                            </div>
                        </div>
                        <div className="label">
                            <label htmlFor="label-filter">Client Type</label>
                            <select id="filter-label" name="filter-label" defaultValue="all">
                                <option value="all" disabled>All</option>
                                <option value="marcos">marcos</option>
                                <option value="fox">fox</option>
                            </select>
                            <button>Apply</button>
                        </div>
                    </div>
                    
                    <div className="info-box">
                        <h3>This Week's Group: C</h3>
                        <p>Lock Date: 9/20/20</p>
                        <p>In Home Date: 10/01/2020</p>
                    </div>
                </div>
            </form>
        )
    }
}
