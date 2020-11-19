import React, { Component } from 'react';
import moment from 'moment';

import iconPrevious from '../images/icon-previous.svg';
import iconScheduled from '../images/icon-scheduled.svg';
import iconCompleted from '../images/icon-complete.svg';
import iconClose from '../images/icon-close.svg';

const displayAlert = (e, message) => {
    e.preventDefault();
    alert(message);
}

const ActionOptions = ({task}) => {
    const {who, what} = task;
    if (what === "Artwork" && who === "Client"){
        return (
            <>
                <option value="Project Details">Project Details</option>
                <option value="Changes Requested">Changes Requested</option>
                <option value="Left Voicemail">Left Voicemail</option>
                <option value="Art to Client">Art to Client</option>
                <option value="Art Approved">Art Approved</option>
                <option value="Art Unapproved">Art Unapproved</option>
            </>
        )
    } else if (what === "Print" && who === "Artist"){
        return (
            <>
                <option value="Print Posted">Print Posted</option>
            </>
        )
    } else if (who === "Artist"){
        return (
            <>
                <option value="Changes to Artist">Changes to Artist</option>
                <option value="Brief to Artist">Brief to Artist</option>
            </>
        )
    } else if (what === "Print"){
        return (
            <>
                <option value="Print Approved">Print Approved</option>
                <option value="Print Unapproved">Print Unapproved</option>
            </>
        )
    } else if (what === "Mapping" && who === "Client"){
        return (
            <>
                <option value="Map To Client">Map To Client</option>
                <option value="Map Approved">Map Approved</option>
                <option value="Map Unapproved">Map Unapproved</option>
            </>
        )
    } else if (what === "Mapping"){
        return (
            <>
                <option value="Map Attached">Map Attached</option>
            </>
        )
    } 
    else if (what === "Order"){
        return (
            <>
                <option value="Job Completed">Job Completed</option>
                <option value="Job Accepted">Job Accepted</option>
                <option value="Job Declined">Job Declined</option>
            </>
        )
    } else {
        return(
            <>
                <optgroup label="Art">
                    <option value="Project Details">Project Details</option>
                    <option value="Changes to Artist">Changes to Artist</option>
                    <option value="Changes Requested">Changes Requested</option>
                    <option value="Left Voicemail">Left Voicemail</option>
                    <option value="Art to Client">Art to Client</option>
                    <option value="Brief to Artist">Brief to Artist</option>
                    <option value="Art Approved">Art Approved</option>
                    <option value="Art Unapproved">Art Unapproved</option>
                </optgroup>
                <optgroup label="Print">
                    <option value="Print Posted">Print Posted</option>
                    <option value="Print Approved">Print Approved</option>
                    <option value="Print Unapproved">Print Unapproved</option>
                </optgroup>
                <optgroup label="Map">
                    <option value="Map To Client">Map To Client</option>
                    <option value="Map Approved">Map Approved</option>
                    <option value="Map Attached">Map Attached</option>
                    <option value="Map Unapproved">Map Unapproved</option>
                </optgroup>
                <optgroup label="System">
                    <option value="Job Completed">Job Completed</option>
                    <option value="Job Accepted">Job Accepted</option>
                    <option value="Job Declined">Job Declined</option>
                </optgroup>
            </>
        )
    }
}

class ScheduledTask extends Component {
   
    render() {
        const {action, who, what, date, actionTaken, note} = this.props.task;
        return (
            <form className='scheduler-scheduled'>      
                <div className="scheduler-scheduled_title">
                    <div className="flex align-center">
                        <img src={actionTaken ? iconCompleted : iconScheduled} alt="Scheduled" style={{width: "24px", height: "24px"}} className="mr-s"/>
                        <h3>{actionTaken ? actionTaken : "Scheduled Task"}</h3>
                    </div>
                    
                    <div className="scheduler-scheduled_date">
                        <label className="mr-s" htmlFor="due">Due</label>
                        <input
                            type="datetime-local"
                            name="due"
                            value={date.format("YYYY-MM-DDTkk:mm")}
                            onChange={this.props.handleChangeDate}
                        />
                    </div>
                </div>
                <div className="scheduler-scheduled_dropdowns">
                    <select
                        value={action}
                        onChange={this.props.handleChangeAction}
                        className="mr-s"
                    >
                        <option value="" disabled>Action</option>
                            <option value="Call">Call</option>
                            <option value="Email">Email</option>
                            <option value="System">System</option>
                    </select>
                    <select
                        value={who}
                        onChange={this.props.handleChangeWho}
                        className="mr-s"
                        disabled={!action}
                    >
                        <option value="" disabled>Who</option>
                            <option value="Client" disabled={action === "System"}>Client</option>
                            <option value="Artist" disabled={action === "System"}>Artist</option>
                            <option value="Review" disabled={!(action === "System")}>Review</option>
                            <option value="Artque" disabled={!(action === "System")}>ArtQue</option>
                            <option value="Approve" disabled={!(action === "System")}>Approve</option>
                            <option value="Attach" disabled={!(action === "System")}>Attach</option>
                            <option value="Accept" disabled={!(action === "System")}>Accept</option>
                            <option value="Assign" disabled={!(action === "System")}>Assign</option>
                            <option value="Finalize" disabled={!(action === "System")}>Finalize</option>
                    </select>
                    <select
                        value={what}
                        onChange={this.props.handleChangeWhat}
                        disabled={!(who && action)}
                    >
                        <option value="" disabled>What</option>
                            <option value="General">General</option>
                            <option value="Artwork">Artwork</option>
                            <option value="Change">Change</option>
                            <option value="Print">Print</option>
                            <option value="Mapping" disabled={who === "Artist"}>Mapping</option>
                            <option value="Brief">Brief</option>
                            <option value="Order" disabled={!(who === "Accept" || who === "Assign" || who === "Finalize")}>Order</option>
                    </select>
                </div>
                <textarea
                    value={note}
                    placeholder="Comments"
                    onChange={this.props.handleChangeNote}
                />
                <div className="scheduler-scheduled_actions">
                    <div>
                        <label htmlFor="complete task" className="mr-s">Complete Task:</label>
                        <select
                            value={actionTaken}
                            onChange={this.props.handleActionTaken}
                            style={{
                                color: actionTaken === "" ? "blue" : "green",
                                borderColor: actionTaken === "" ? "blue" : "green"
                            }}
                            disabled={!(action && who && what)}
                            name="complete task"
                        >
                            <option value="">Incomplete</option>
                            <ActionOptions task={this.props.task} />
                        </select>
                    </div>
                    
                    <div>
                        {who === "Client"
                        ?
                        <button
                            onClick={(e) => displayAlert(e, "Open order line in new tab, jump to contact info")}
                            className="underline-blue"
                        >Client Contact Info</button>
                        :
                        null}
                        {actionTaken ? null :
                            <button
                                className="ml-s underline-red"
                                onClick={this.props.deleteScheduledTask}
                            >Delete Task</button>
                        }
                    </div>
                    
                </div>
                
            </form>
        )
    }
}

export default class Scheduler extends Component {
    constructor(props){
        super(props);
        this.state = ({
            tasks: [],
            taskEdited: false,
            save: false,
        });
    }

    componentDidMount(){
        let tasks = []
        const tasksFromProps = [...this.props.job.scheduledTasks];
        tasksFromProps.forEach(task => {
            const spreadTask = {...task};
            tasks.push(spreadTask);
        })
        this.setState({tasks});
    }

    componentWillUnmount(){
        if (this.state.save){
            this.props.saveChanges([...this.state.tasks]);
        }
    }

    handleTaskEdited(detail, index, e){
        e.preventDefault();

        let task = {...this.state.tasks[index]};
        let tasks = [...this.state.tasks];

        if (detail === "date"){
            task.date = moment(e.target.value);
            tasks.splice(index, 1, task);
        }else if (detail === "actionTaken"){
            task.actionTaken = e.target.value;
            task.completedBy = this.props.completedBy
            tasks.splice(index, 1, task);
        }else {
            task[detail] = e.target.value;
            tasks.splice(index, 1, task);
        }

        this.setState({
            tasks,
            taskEdited: true
        });
    }

    newTask(e){
        const tasks = [...this.state.tasks];
        const newTask = {
            action: "",
            who: "",
            what: "",
            date: moment().add(1, "days"),
            actionTaken: "",
            completedBy: "",
            note: ""
        }
        tasks.push(newTask);
        this.setState({
            tasks,
            taskEdited: true
        });
    }

    handleSave(e){
        e.preventDefault();
        this.setState({
            save: true,
        }, () => this.props.close())
    }

    handleOverlayClick(e){
        e.preventDefault();
        this.props.close();
    }

    deleteScheduledTask(e, index){
        e.preventDefault();

        let tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({
            tasks,
            taskEdited: true
        });
    }

    render() {
        const {action, who, what, actionTaken, date, note} = this.props.job.lastActions[0];

        const scheduledTasks = this.state.tasks.filter((task) => task.actionTaken === "");
        // const completedTasks = this.state.tasks.filter((task) => task.actionTaken !== "");

        const scheduledTasksNotFilledOut = scheduledTasks.filter((task) => (
            (task.action === "") || (task.who === "") || (task.what === ""))
        );

        return (
            <div className="scheduler-container">

                {/* clickable overlay */}
                <div className="scheduler-overlay" onClick={(e) => this.handleOverlayClick(e)} />
                
                {/* start of scheduler box */}
                <div className="scheduler">
                    <h2>{this.props.job.company}</h2>
                    <div className="scheduler-note">
                        <p>{`Client Note: ${this.props.job.note}`}</p>
                        <div className="scheduler-note_buttons">
                            <button
                                className="mr-s"
                                onClick={(e) => displayAlert(e, "Open Outlook: Sales")}
                            >Email Sales</button>
                            <button
                                onClick={(e) => displayAlert(e, "Open Outlook: Team Leader")}
                            >Email Team Leader</button>
                        </div>
                        <button
                            onClick={(e) => this.handleOverlayClick(e)}
                            className="scheduler-close"
                        >
                                <img src={iconClose} alt="Close"/>
                        </button>
                    </div>

                    {/* last completed task */}
                    <div className="scheduler-last">
                        <div>
                            <div className="scheduler-last_title">
                                <div className="flex align-center">
                                    <img src={iconPrevious} alt="Previous" style={{width: "24px", height: "24px"}} className="mr-s"/>
                                    <h3>{actionTaken}</h3>
                                </div>
                                <p>{`COMPLETED ${date.format("MM-DD-YY h:mma")}`}</p>
                            </div>
                        </div>
                        <div className="scheduler-last_details">
                            <p><strong>{`${action} ${who}: ${what}`}</strong></p>
                        </div>
                        <p>{`Comments: ${note}`}</p>
                    </div>

                    {/* list of tasks in state */}
                    {this.state.tasks.map((task, index) => 
                        <ScheduledTask
                            task={task}
                            index={index}
                            key={`scheduler-${index}`}
                            handleChangeAction={(e) => this.handleTaskEdited("action", index, e)}
                            handleChangeWho={(e) => this.handleTaskEdited("who", index, e)}
                            handleChangeWhat={(e) => this.handleTaskEdited("what", index, e)}
                            handleChangeNote={(e) => this.handleTaskEdited("note", index, e)}
                            handleChangeDate={(e) => this.handleTaskEdited("date", index, e)}
                            handleActionTaken={(e) => this.handleTaskEdited("actionTaken", index, e)}
                            deleteScheduledTask={(e) => this.deleteScheduledTask(e, index)}
                            status={this.props.job.status}
                        />
                    )}

                    {/* button group */}
                    <div className="scheduler-buttons">
                        <button
                            onClick={(e) => this.newTask(e)}
                            className="scheduler-button_add"
                        >
                            + Add Scheduled Task
                        </button>
                        <button
                            disabled={
                                !(
                                    this.state.taskEdited &&
                                    scheduledTasksNotFilledOut.length === 0
                                )
                            }
                            onClick={(e) => this.handleSave(e)}
                            className="scheduler-button_save"
                        >Save & Close</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
