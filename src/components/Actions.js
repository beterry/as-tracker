import React, { Component } from 'react'

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

    render() {
        return (
            <section className="actions">
                <form className="actions-left">
                    <div>
                        <button
                            className="action-button large"
                            disabled={!(this.props.numberSelected === 1)}
                            onClick={(e) => this.handleSchedulerButton(e)}
                        >Schedule Task</button>
                        <button
                            className="action-button large"
                            disabled={!(this.props.numberSelected === 1)}
                        >Master Log</button>
                    </div>
                    <div>
                        <div>
                            <button disabled={!(this.props.numberSelected === 1)} className="action-button">View Art</button>
                            <button disabled={!(this.props.numberSelected === 1)} className="action-button">View Proof</button>
                        </div>
                        <div>
                            <button disabled={!(this.props.numberSelected === 1)} className="action-button">Email Sales</button>
                            <button disabled={!(this.props.numberSelected === 1)} className="action-button">Email Team Leader</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <select
                                value={this.state.action}
                                disabled={this.props.numberSelected === 0}
                                onChange={(e) => this.handleActionChange(e)}
                            >
                                <option value="" disabled>Quick Action</option>
                                <optgroup label="Proof">
                                    <option value="Artist Changes">Artist Changes</option>
                                    <option value="Art Uploaded">Art Uploaded</option>
                                    <option value="Art to Client">Art to Client</option>
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
                                <optgroup label="system">
                                    <option value="Complete">Complete</option>
                                </optgroup>
                            </select>
                            <button
                                disabled={this.props.numberSelected === 0}
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
                                disabled={this.props.numberSelected === 0}
                                onChange={(e) => this.handleTypeChange(e)}
                            />
                            <button
                                disabled={this.props.numberSelected === 0}
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
                                disabled={this.props.numberSelected === 0}
                                onChange={(e) => this.handleChangeSpecialist(e)}
                            >
                                <option value="" disabled>Account Specialist</option>
                                <option value="LucasT">Lucas Templin</option>
                                <option value="TarrynG">Tarryn Hendel</option>
                                <option value="SaraP">Sara Putt</option>
                            </select>
                            <button
                                disabled={this.props.numberSelected === 0}
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
