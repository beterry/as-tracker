import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

import moment from 'moment';

const MasterLogButton = ({disabled, selected}) => {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/log/${selected}`);
    }

    return (
        <button
            className="action-button large"
            disabled={disabled}
            onClick={(e) => handleClick(e)}
        >Master Log</button>
    )
}

export default class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientType: "",
            specialist: "",
            action: ""
        }
    }

    handleTypeChange(e) {
        this.setState({ clientType: e.target.value });
    }

    handleChangeSpecialist(e) {
        this.setState({ specialist: e.target.value });
    }

    handleActionChange(e){
        this.setState({action: e.target.value});
    }

    handleTypeButton(e) {
        this.props.handleAddType(this.state.clientType, e);
        this.setState({clientType: ""});
    }

    handleReassign(e){
        this.props.handleReassign(this.state.specialist, e);
        this.setState({specialist: ""});
    }

    handleActionButton(e){
        this.props.handleQuickAction(this.state.action, e);
        this.setState({action: ""})
    }

    handleSchedulerButton(e){
        e.preventDefault();
        this.props.openScheduler();
    }

    handleEmailButton(e, who){
        e.preventDefault();
        alert("Outlook Pop-up");

        const task = {
            action: "Email",
            who,
            what: "General",
            date: moment(),
            actionTaken: "Complete",
            note: "",
        }

        this.props.addLastAction(task);
    }

    handleViewButton(e, what){
        e.preventDefault();
        alert(`Pop-up: ${what}`);
    }

    render() {
        const numberSelected = this.props.selected.length;
        return (
            <section className="actions">
                <form className="actions-left">
                    <div>
                        <button
                            className="action-button large"
                            disabled={!(numberSelected === 1)}
                            onClick={(e) => this.handleSchedulerButton(e)}
                        >Schedule Task</button>

                        <MasterLogButton
                            disabled={!(numberSelected === 1)}
                            selected={this.props.selected[0]}
                        />

                    </div>
                    <div className="button-group">
                        <div>
                            <button
                                disabled={!(numberSelected === 1)}
                                className="action-button"
                                onClick={(e) => this.handleViewButton(e, "Proof")}
                            >
                                View Proof
                            </button>
                            <button
                                disabled={!(numberSelected === 1)}
                                className="action-button"
                                onClick={(e) => this.handleViewButton(e, "Print")}
                            >
                                View Print
                            </button>
                        </div>
                        <div>
                            <button
                                disabled={!(numberSelected === 1)}
                                className="action-button"
                                onClick={(e) => this.handleEmailButton(e, "Sales")}
                            >
                                Email Sales
                            </button>
                            <button
                                disabled={!(numberSelected === 1)}
                                className="action-button"
                                onClick={(e) => this.handleEmailButton(e, "Team Leader")}
                            >
                                Email Team Leader
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <select
                                value={this.state.action}
                                disabled={numberSelected === 0}
                                onChange={(e) => this.handleActionChange(e)}
                            >
                                <option value="" disabled>Quick Action</option>
                                <optgroup label="Art">
                                    <option value="Changes to Artist">Changes to Artist</option>
                                    <option value="Changes Requested">Changes Requested</option>
                                    <option value="Art Uploaded">Art Uploaded</option>
                                    <option value="Art to Client">Art to Client</option>
                                    <option value="Brief to Artist">Brief to Artist</option>
                                    <option value="Art Approved">Art Approved</option>
                                    <option value="Art Unapproved">Art Unapproved</option>
                                </optgroup>
                                <optgroup label="Print">
                                    <option value="Print Uploaded">Print Uploaded</option>
                                    <option value="Print Approved">Print Approved</option>
                                    <option value="Printing">Printing</option>
                                    <option value="Print Unapproved">Print Unapproved</option>
                                </optgroup>
                                <optgroup label="Map">
                                    <option value="Map Approved">Map Approved</option>
                                    <option value="Map Uploaded">Map Uploaded</option>
                                    <option value="Map Unapproved">Map Unapproved</option>
                                </optgroup>
                                <optgroup label="System">
                                    <option value="Job Completed">Job Completed</option>
                                </optgroup>
                            </select>
                            <button
                                disabled={numberSelected === 0}
                                onClick={(e) => this.handleActionButton(e)}
                            >
                                Apply
                            </button>
                        </div>
                        <div>
                            <input
                                placeholder="Client Type"
                                type="text"
                                value={this.state.clientType}
                                disabled={numberSelected === 0}
                                onChange={(e) => this.handleTypeChange(e)}
                            />
                            <button
                                disabled={numberSelected === 0}
                                onClick={(e) => this.handleTypeButton(e)}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <select
                                value={this.state.specialist}
                                disabled={numberSelected === 0}
                                onChange={(e) => this.handleChangeSpecialist(e)}
                            >
                                <option value="" disabled>Account Specialist</option>
                                <option value="LucasT">Lucas Templin</option>
                                <option value="TarrynH">Tarryn Hendel</option>
                                <option value="SaraP">Sara Putt</option>
                            </select>
                            <button
                                disabled={numberSelected === 0}
                                onClick={(e) => this.handleReassign(e)}
                            >
                                Reassign
                            </button>
                        </div>
                    </div>
                </form>
                <div className="info-box">
                    <h3>This Week's Group: C</h3>
                    <p>Lock Date: 9/20/20</p>
                    <p>In Home Date: 10/01/2020</p>
                </div>
            </section>
        )
    }
}
