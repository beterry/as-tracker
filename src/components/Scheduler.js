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

const ClientContact = ({contacts}) => {
    return (
        <div className="client-contact">
            <button
                onClick={(e) => displayAlert(e, "Open order line in new tab, jump to contact info")}
                className="underline-blue"
            >Client Contact Info</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => 
                        <tr key={`contact ${index}`}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td
                                className="txt-ul-blue"
                                onClick={(e) => displayAlert(e, `Open Outlook: ${contact.email}`)}
                            >{contact.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
    )
}

const ActionOptions = ({task}) => {
    const {action, who, what} = task;
    if (action === "Call" && who === "Client"){
        return (
            <>
                <option value="Task Complete">Task Complete</option>
                <option value="Left Voicemail">Left Voicemail</option>
                <option value="Proof Approved">Proof Approved</option>
                <option value="Proof Unapproved">Proof Unapproved</option>
                <option value="Map Approved">Map Approved</option>
                <option value="Map Unapproved">Map Unapproved</option>
            </>
        )
    } else if (action === "Email" && who === "Client"){
        return (
            <>
                <option value="Email Client">Email Client</option>
                <option value="Proof to Client">Proof to Client</option>
                <option value="Proof Approved">Proof Approved</option>
                <option value="Proof Unapproved">Proof Unapproved</option>
                <option value="Map to Client">Map to Client</option>
                <option value="Map Approved">Map Approved</option>
                <option value="Map Unapproved">Map Unapproved</option>

            </>
        )
    } else if (action === "Text" && who === "Client"){
        return (
            <>
                <option value="Task Complete">Task Complete</option>
            </>
        )
    } else if (action === "Call" && who === "Artist"){
        return (
            <>
                <option value="Left Voicemail">Left Voicemail</option>
                <option value="Task Complete">Task Complete</option>
                <option value="Proof Approved">Proof Approved</option>
                <option value="Proof Unapproved">Proof Unapproved</option>
            </>
        )
    } else if (action === "Email" && who === "Artist"){
        return (
            <>
                <option value="Email Artist">Email Artist</option>
                <option value="Changes to Artist">Changes to Artist</option>
                <option value="Brief to Artist">Brief to Artist</option>
                <option value="Proof Approved">Proof Approved</option>
                <option value="Proof Unapproved">Proof Unapproved</option>
            </>
        )
    } else if (what === "Proof Pending"){
        return (
            <>
                <option value="-" disabled>Waiting for proof upload...</option>
            </>
        )
    } else if (what === "Proof Review"){
        return (
            <>
                <option value="Task Complete">Task Complete</option>
            </>
        )
    } else if (what === "Print Pending"){
        return (
            <>
                <option value="-" disabled>Waiting for print upload...</option>
            </>
        )
    } else if (what === "Print Review"){
        return (
            <>
                <option value="Print Approved">Print Approved</option>
                <option value="Print Unapproved">Print Unapproved</option>
            </>
        )
    } else if (who === "Attach" && what === "Mapping"){
        return (
            <>
                <option value="-" disabled>Waiting for map upload...</option>
            </>
        )
    } else if (what === "Reminder"){
        return (
            <>
                <option value="Task Complete">Task Complete</option>
            </>
        )
    } else if (who === "Approve" && what === "Order"){
        return (
            <>
                <option value="Proof Approved">Proof Approved</option>
                <option value="Proof Unapproved">Proof Unapproved</option>
                <option value="Map Approved">Map Approved</option>
                <option value="Map Unapproved">Map Unapproved</option>
                <option value="Print Approved">Print Approved</option>
                <option value="Print Unapproved">Print Unapproved</option>
            </>
        )
    } else if (who === "Accept" && what === "Order"){
        return (
            <>
                <option value="Order Accepted">Order Accepted</option>
                <option value="Order Decline">Order Decline</option>
            </>
        )
    } else if (who === "Finalize" && what === "Order"){
        return (
            <>
                <option value="Order Completed">Order Completed</option>
            </>
        )
    } else {
        return(
            <>
                <option value="Email Artist">Email Artist</option>
                <option value="Changes to Artist">Changes to Artist</option>
                <option value="Brief to Artist">Brief to Artist</option>
                <option value="Proof to Client">Proof to Client</option>
                <option value="Map to Client">Map to Client</option>
                <option value="Proof Approved">Proof Approved</option>
                <option value="Proof Unapproved">Proof Unapproved</option>
                <option value="Print Approved">Print Approved</option>
                <option value="Print Unapproved">Print Unapproved</option>
                <option value="Map Approved">Map Approved</option>
                <option value="Map Unapproved">Map Unapproved</option>
                <option value="Order Completed">Order Completed</option>
                <option value="Order Accepted">Order Accepted</option>
                <option value="Order Decline">Order Decline</option>
                <option value="Order Assigned">Order Assigned</option>
                <option value="Email Client">Email Client</option>
                <option value="Task Complete">Task Complete</option>
                <option value="Left Voicemail">Left Voicemail</option>
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
                        <option value="" disabled>Type</option>
                            <option value="Call">Call</option>
                            <option value="Email">Email</option>
                            <option value="Text">Text</option>
                            <option value="System">System</option>
                    </select>
                    <select
                        value={who}
                        onChange={this.props.handleChangeWho}
                        className="mr-s"
                        disabled={!action}
                    >
                        <option value="" disabled>Who</option>
                            <option value="Client">Client</option>
                            <option value="Artist">Artist</option>
                            <option value="Note" disabled={action !== "System"}>Note</option>
                            <option value="Approve" disabled={action !== "System"}>Approve</option>
                            <option value="Attach" disabled={action !== "System"}>Attach</option>
                            <option value="Accept" disabled={action !== "System"}>Accept</option>
                            <option value="Pending" disabled={action !== "System"}>Pending</option>
                            <option value="Finalize" disabled={action !== "System"}>Finalize</option>
                    </select>
                    <select
                        value={what}
                        onChange={this.props.handleChangeWhat}
                        disabled={!(who && action)}
                    >
                        <option value="" disabled>What</option>
                            <option value="Order">Order</option>
                            <option value="Proof Pending" disabled={!(action === "System" && who === "Artist")}>Proof Pending</option>
                            <option value="Proof Review" disabled={!(action === "System" && who === "Artist")}>Proof Review</option>
                            <option value="Print Pending" disabled={!(action === "System" && who === "Artist")}>Print Pending</option>
                            <option value="Print Review" disabled={!(action === "System" && who === "Artist")}>Print Review</option>
                            <option value="Mapping" disabled={!(action === "System" && who === "Attach")}>Mapping</option>
                            <option value="Reminder" disabled={!(action === "System" && who === "Note")}>Reminder</option>
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
                        <ClientContact
                            contacts={this.props.contacts}
                        />
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
        this.openOutlook = this.openOutlook.bind(this);
        this.handleNewTaskButton = this.handleNewTaskButton.bind(this);
        this.handleActionTaken = this.handleActionTaken.bind(this);
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

    openOutlook(who){
        alert(`Open Outlook: ${who}`);
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
        }, () => {
            if (detail === "actionTaken"){
                this.handleActionTaken(e.target.value);
            }
        });
    }

    handleActionTaken(actionTaken){
        if (actionTaken === "Art to Client"){
            this.newTask("Call", "Client", "Artwork", () => this.openOutlook("Client"));
        }
        //TODO: add more conditions for actions taken
    }

    newTask(action, who, what, callback){
        const tasks = [...this.state.tasks];
        const newTask = {
            action,
            who,
            what,
            date: moment().add(1, "days"),
            actionTaken: "",
            completedBy: "",
            note: ""
        }
        tasks.push(newTask);
        this.setState({
            tasks,
            taskEdited: true
        },
            callback()
        );
    }

    handleNewTaskButton(e){
        e.preventDefault();
        this.newTask("", "", "", () => {});
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
                            contacts={this.props.job.contacts}
                        />
                    )}

                    {/* button group */}
                    <div className="scheduler-buttons">
                        <button
                            onClick={(e) => this.handleNewTaskButton(e)}
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
