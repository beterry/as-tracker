import React, { Component } from 'react';
import moment from 'moment';

export default class Scheduler extends Component {
    constructor(props){
        super(props)
        this.state = ({
            scheduledTasks: [
                {
                    action: "Work now",
                    who: "",
                    what: "",
                    date: moment(),
                    acctSpecialist: "",
                    note: []
                },
            ],
        })
    }

    componentDidMount() {
        console.log("Scheduler enabled");
        this.setState({
            scheduledTasks: this.props.job.scheduledTasks,
        });
    }

    componentWillUnmount() {
        console.log("Scheduler hidden");
    }

    render() {
        return (
            <div
                className="scheduler-overlay"
                onClick={this.props.toggle}
            >
                <div className="scheduler">
                    {this.props.job.note ? <p>{this.props.job.note}</p> : null}
                    <div className="scheduler-last">
                        <h3>Last Completed</h3>
                    </div>
                    <form className='scheduler-scheduled'>
                        <h3>Scheduled Task</h3>
                    </form>
                </div>
            </div>
        )
    }
}
