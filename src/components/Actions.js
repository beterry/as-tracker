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
            newClientLabel: "",
            existingClientLabel: "",
            specialist: "",
            action: ""
        }
    }

    handleNewLabelChange(e) {
        this.setState({ newClientLabel: e.target.value });
    }

    handleExistingLabelChange(e) {
        this.setState({ existingClientLabel: e.target.value });
    }

    handleChangeSpecialist(e) {
        this.setState({ specialist: e.target.value });
    }

    handleActionChange(e){
        this.setState({action: e.target.value});
    }

    handleNewLabelButton(e) {
        this.props.handleAddLabel(this.state.newClientLabel, e);
        this.setState({newClientLabel: ""});
    }

    handleExistingLabelButton(e) {
        this.props.handleAddLabel(this.state.existingClientLabel, e);
        this.setState({existingClientLabel: ""});
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
                                value={this.state.existingClientLabel}
                                disabled={numberSelected === 0}
                                onChange={(e) => this.handleExistingLabelChange(e)}
                            >
                                <option value="" disabled>Existing Client Label</option>
                                <option value="Default">Default</option>
                                {this.props.labelOptions.map((option, index) => 
                                    <option value={option} key={`ex.label-${index}`}>{option}</option>
                                )}
                            </select>
                            <button
                                disabled={numberSelected === 0}
                                onClick={(e) => this.handleExistingLabelButton(e)}
                            >
                                Add
                            </button>
                        </div>
                        <div>
                            <input
                                placeholder="New Client Label"
                                type="text"
                                value={this.state.newClientLabel}
                                disabled={numberSelected === 0}
                                onChange={(e) => this.handleNewLabelChange(e)}
                            />
                            <button
                                disabled={numberSelected === 0}
                                onClick={(e) => this.handleNewLabelButton(e)}
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
                                <option value="NikieC">Nikie Rathman</option>
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
                    <p>Art Due Date: 9/20/20</p>
                    <p>In Home Date: 10/01/2020</p>
                </div>
            </section>
        )
    }
}
