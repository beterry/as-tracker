import React, { Component } from 'react';
import moment from 'moment';

const displayAlert = (e, message) => {
    e.preventDefault();
    alert(message);
}

const ActionOptions = ({task}) => {
    if (task.what === "Artwork"){
        return (
            <>
                <option value="Project Details">Project Details</option>
                <option value="Changes to Artist">Changes to Artist</option>
                <option value="Changes Requested">Changes Requested</option>
                <option value="Art to Client">Art to Client</option>
                <option value="Brief to Artist">Brief to Artist</option>
                <option value="Art Approved">Art Approved</option>
                <option value="Art Unapproved">Art Unapproved</option>
            </>
        )
    }else{
        return(
            <>
                <optgroup label="Art">
                    <option value="Project Details">Project Details</option>
                    <option value="Changes to Artist">Changes to Artist</option>
                    <option value="Changes Requested">Changes Requested</option>
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
                    <h3>{actionTaken ? actionTaken : "Scheduled Task"}</h3>
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
                    >
                        <option value="" disabled>Who</option>
                            <option value="Client">Client</option>
                            <option value="Artist">Artist</option>
                            <option value="Artque">ArtQue</option>
                            <option value="Approve">Approve</option>
                            <option value="Attach">Attach</option>
                            <option value="Finalize">Finalize</option>
                    </select>
                    <select
                        value={what}
                        onChange={this.props.handleChangeWhat}
                    >
                        <option value="" disabled>What</option>
                            <option value="General">General</option>
                            <option value="Artwork">Artwork</option>
                            <option value="Change">Change</option>
                            <option value="Print">Print</option>
                            <option value="Mapping">Mapping</option>
                            <option value="Brief">Brief</option>
                            <option value="Order">Order</option>
                    </select>
                </div>
                <textarea
                    value={note}
                    placeholder="Comments"
                    onChange={this.props.handleChangeNote}
                />
                <div className="scheduler-scheduled_actions">
                    <select
                        value={actionTaken}
                        onChange={this.props.handleActionTaken}
                        style={{
                            color: actionTaken === "" ? "red" : "green",
                            borderColor: actionTaken === "" ? "red" : "green"
                        }}
                    >
                        <option value="">Incomplete</option>
                        <ActionOptions task={this.props.task} />
                    </select>
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
        super(props)
        this.state = ({
            scheduledTasks: props.job.scheduledTasks,
            taskEdited: false
        })
    }

    handleTaskEdited(detail, index, e){
        let task = this.state.scheduledTasks[index];
        let scheduledTasks = this.state.scheduledTasks;

        if (detail === "date"){
            task.date = moment(e.target.value);
            scheduledTasks.splice(index, 1, task);
        }else if (detail === "actionTaken"){
            task.actionTaken = e.target.value;
            task.completedBy = this.props.completedBy
            scheduledTasks.splice(index, 1, task);
        }else {
            task[detail] = e.target.value;
            scheduledTasks.splice(index, 1, task);
        }

        this.setState({
            scheduledTasks,
            taskEdited: true
        });
    }

    handleNewTask(e){
        const scheduledTasks = this.state.scheduledTasks;
        const newTask = {
            action: "",
            who: "",
            what: "",
            date: moment().add(1, "days"),
            actionTaken: "",
            completedBy: "",
            note: ""
        }
        scheduledTasks.push(newTask);
        this.setState({scheduledTasks});
    }

    handleSaveAndClose(e){
        this.props.close();
        this.props.saveScheduledTasks(this.state.scheduledTasks, e);
    }

    // why is this saving data?
    handleCloseAndDontSave(){
        this.props.close();
    }

    deleteScheduledTask(e, index){
        e.preventDefault();

        let scheduledTasks = this.state.scheduledTasks;
        scheduledTasks.splice(index, 1);
        this.setState({scheduledTasks});
    }

    render() {
        const {action, who, what, actionTaken, date, note} = this.props.job.lastActions[0];

        const scheduledTasks = this.state.scheduledTasks.filter((task) => task.actionTaken === "");
        const completedTasks = this.state.scheduledTasks.filter((task) => task.actionTaken !== "");

        let jobCompleted = false;
        if (completedTasks.length > 0) {
            // was the job completed with the last scheduled task
            jobCompleted = completedTasks.pop().actionTaken === "Job Completed";
        }

        const scheduledTasksNotFilledOut = scheduledTasks.filter((task) => (
            (task.action === "") || (task.who === "") || (task.what === ""))
        );

        return (
            <div className="scheduler-container">

                {/* clickable overlay */}
                <div className="scheduler-overlay" onClick={() => this.handleCloseAndDontSave()} />
                
                {/* start of scheduler box */}
                <div className="scheduler">
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
                    </div>
                    <div className="scheduler-last">
                        <div>
                            <div className="scheduler-last_title">
                                <h3>{actionTaken}</h3>
                                <p>{`COMPLETED ${date.format("MM-DD-YY h:mma")}`}</p>
                            </div>
                        </div>
                        <div className="scheduler-last_details">
                            <p><strong>{`${action} ${who}: ${what}`}</strong></p>
                        </div>
                        <p>{`Comments: ${note}`}</p>
                    </div>
                    {this.state.scheduledTasks.map((task, index) => 
                        <ScheduledTask
                            task={task}
                            index={index}
                            key={`scheduled ${index}`}
                            handleChangeAction={(e) => this.handleTaskEdited("action", index, e)}
                            handleChangeWho={(e) => this.handleTaskEdited("who", index, e)}
                            handleChangeWhat={(e) => this.handleTaskEdited("what", index, e)}
                            handleChangeNote={(e) => this.handleTaskEdited("note", index, e)}
                            handleChangeDate={(e) => this.handleTaskEdited("date", index, e)}
                            handleActionTaken={(e) => this.handleTaskEdited("actionTaken", index, e)}
                            deleteScheduledTask={(e) => this.deleteScheduledTask(e, index)}
                        />
                    )}
                    <div className="scheduler-buttons">
                        <button
                            onClick={(e) => this.handleNewTask(e)}
                            className="scheduler-button_add"
                        >
                            + Add Scheduled Task
                        </button>
                        <button
                            disabled={
                                !(
                                    this.state.taskEdited &&
                                    (scheduledTasks.length > 0 || jobCompleted) &&
                                    scheduledTasksNotFilledOut.length === 0
                                )
                            }
                            onClick={(e) => this.handleSaveAndClose(e)}
                            className="scheduler-button_save"
                        >Save & Close</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
