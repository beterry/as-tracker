import React, { Component } from 'react'

export default class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientType: ""
        }
    }

    handleTypeButton(e) {
        this.props.handleAddType(this.state.clientType, e);
        this.setState({clientType: ""});
    }

    handleTypeChange(e) {
        this.setState({ clientType: e.target.value });
    }

    render() {
        return (
            <section className="actions">
                <form className="actions-left">
                    <div>
                        <button className="action-button large">Schedule Task</button>
                        <button className="action-button large">Master Log</button>
                    </div>
                    <div>
                        <div>
                            <button className="action-button">View Art</button>
                            <button className="action-button">View Proof</button>
                        </div>
                        <div>
                            <button className="action-button">Email Sales</button>
                            <button className="action-button">Email Team Leader</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <select defaultValue="default" disabled={this.props.numberSelected === 0}>
                                <option value="default" disabled>Action</option>
                                <option value="art-approve">Art Approved</option>
                                <option value="art-unapprove">Art Unapproved</option>
                                <option value="map-approve">Map Approved</option>
                                <option value="map-unapprove">Map Unapproved</option>
                            </select>
                            <button disabled={this.props.numberSelected === 0}>Apply</button>
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
                            <select defaultValue="default" disabled={this.props.numberSelected === 0}>
                                <option value="default" disabled>Account Spec.</option>
                                <option value="LucasT">Lucas Templin</option>
                                <option value="TarrynG">Tarryn Hendel</option>
                                <option value="SaraP">Sara Putt</option>
                            </select>
                            <button disabled={this.props.numberSelected === 0}>Reassign</button>
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
