import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './styles/App.scss';

//import components
import Header from './components/Header';
import Actions from './components/Actions';
import Table from './components/Table';
import JobRow from './components/JobRow';
import Scheduler from './components/Scheduler';
import MasterLog from './components/MasterLog';

import DateFilter from './components/filters/DateFilter';
import SpecialistFilter from './components/filters/SpecialistFilter';
import ClientLabelFilter from './components/filters/ClientLabelFilter';
import CheckboxFilter from './components/filters/CheckboxFilter';
import SearchFilter from './components/filters/SearchFilter';
import ProductFilter from './components/filters/ProductFilter';

import SystemActions from './components/filters/SystemActions';

//import data
// import data from './data/database';
import data from './data/db-2';

//utility libraries
import moment from 'moment';
import sortJobs from './util/sortJobs';
import filterJobs from './util/filterJobs';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: data,
            selected: [],
            showScheduler: false,
            sortBy: "scheduledTasks",
            sortDirection: true,
            filterDateStart: moment().subtract(7, "days"),
            filterDateEnd: moment().add(21, "days"),
            filterSpecialist: "all",
            filterClientLabel: ["Default"],
            filterProduct: "all",
            hideCompleted: true,
            filterSearchWord: "",
            allSelected: false,
            user: "TarrynH",
            isAdmin: true,
            tab: "Weekly",
        };
        this.editSelected = this.editSelected.bind(this);
        this.addLabel = this.addLabel.bind(this);
        this.reassignSpecialist = this.reassignSpecialist.bind(this);
        this.saveSchedulerChanges = this.saveSchedulerChanges.bind(this);
        this.changeSortBy = this.changeSortBy.bind(this);
        this.changeFilterStartDate = this.changeFilterStartDate.bind(this);
        this.changeFilterEndDate = this.changeFilterEndDate.bind(this);
        this.changeFilterSpecialist = this.changeFilterSpecialist.bind(this);
        this.changeFilterClientLabel = this.changeFilterClientLabel.bind(this);
        this.changeFilterProduct = this.changeFilterProduct.bind(this);
        this.toggleHideCompleted = this.toggleHideCompleted.bind(this);
        this.changeFilterSearchWord = this.changeFilterSearchWord.bind(this);
        this.addLastAction = this.addLastAction.bind(this);
        this.clearSelected = this.clearSelected.bind(this);
        this.restoreDefaultFilters = this.restoreDefaultFilters.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.handleSystemAction = this.handleSystemAction.bind(this);
    }

    componentDidMount() {
        if (!this.state.isAdmin) {
            this.setState({
                filterSpecialist: this.state.user,
            })
        } else {
            this.setState({
                filterSpecialist: "all",
            })
        }
    }

    changeUser(user) {
        if (user === "TarrynH") {
            this.setState({
                user,
                isAdmin: true,
                filterSpecialist: "all",
            })
        } else {
            this.setState({
                user,
                isAdmin: false,
                filterSpecialist: user
            })
        }
    }

    handleSystemAction(action){
        let jobs = [...this.state.jobs];
        let job = {...jobs.find(job => job.id === this.state.selected[0])};
        let index = jobs.findIndex(job => job.id === this.state.selected[0]);

        let newCompletedTask = {
            action: "",
            who: "",
            what: "",
            date: moment(),
            actionTaken: "Task Complete",
            completedBy: "System",
            note: "",
        };

        let newScheduledTask = {
            action: "",
            who: "",
            what: "",
            date: moment().add(1, "days"),
            actionTaken: "",
            completedBy: "",
            note: "",
        }

        if (action === "Upload Proof"){
            //add new lastAction
            newCompletedTask = {...newCompletedTask, action: "System", who: "Artist", what: "Proof Pending"};
            job.lastActions = [newCompletedTask, ...job.lastActions];

            //delete scheduled task
            const taskIndex = job.scheduledTasks.findIndex(task => task.what === "Proof Pending");
            newScheduledTask = {...newScheduledTask, action: "System", who: "Artist", what: "Proof Review"};
            job.scheduledTasks.splice(taskIndex, 1, newScheduledTask);
        } else if (action === "Upload Print"){
            //add new lastAction
            newCompletedTask = {...newCompletedTask, action: "System", who: "Artist", what: "Print Pending"};
            job.lastActions = [newCompletedTask, ...job.lastActions];

            //delete scheduled task
            const taskIndex = job.scheduledTasks.findIndex(task => task.what === "Print Pending");
            newScheduledTask = {...newScheduledTask, action: "System", who: "Artist", what: "Print Review"};
            job.scheduledTasks.splice(taskIndex, 1, newScheduledTask);
        } else {
            //add new lastAction
            newCompletedTask = {...newCompletedTask, action: "System", who: "Attach", what: "Mapping"};
            job.lastActions = [newCompletedTask, ...job.lastActions];

            //delete scheduled task
            const taskIndex = job.scheduledTasks.findIndex(task => task.what === "Mapping" && task.who === "Attach");

            if (job.status.printUploaded){
                newScheduledTask = {...newScheduledTask, action: "System", who: "Finalize", what: "Order"};
                job.scheduledTasks.splice(taskIndex, 1, newScheduledTask);
            } else {
                job.scheduledTasks.splice(taskIndex, 1);
            }
            
        }

        //replace old info with new data from the Scheduler
        jobs.splice(index, 1, job);

        //update state
        this.setState({ jobs });
    }

    editSelected(id, e) {
        let selected = [...this.state.selected];
        const filteredJobs = filterJobs(this.state);

        if (!this.state.selected.includes(id)) {
            selected.push(id)
        } else {
            const index = selected.indexOf(id);
            selected.splice(index, 1);
        }

        this.setState({
            selected,
            allSelected: selected.length === filteredJobs.length
        });
        // console.log(selected);
    }

    addLabel(label, e) {
        e.preventDefault();
        // console.log(label);

        let jobs = [...this.state.jobs]
        let filterClientLabel = [...this.state.filterClientLabel];

        if (!filterClientLabel.includes(label)){
            filterClientLabel.push(label);
        }

        this.state.selected.forEach(id => {
            let job = {...jobs.find(job => job.id === id)};
            let index = jobs.findIndex(job => job.id === id);

            job.label = label;

            jobs.splice(index, 1, job);
        })

        this.setState({ jobs, filterClientLabel })
    }

    reassignSpecialist(name, e) {
        e.preventDefault();
        // console.log(`running action: ${name}`);

        let jobs = [...this.state.jobs]

        this.state.selected.forEach(id => {
            let job = {...jobs.find(job => job.id === id)};
            let index = jobs.findIndex(job => job.id === id);

            job.acctSpecialist = name;

            jobs.splice(index, 1, job);
        })

        // clear selected if not Admin
        if (!this.state.isAdmin) {
            this.clearSelected();
        }

        this.setState({ jobs })
        // console.log(jobs);
    }

    toggleScheduler() {
        this.setState(state => ({
            showScheduler: !this.state.showScheduler,
        }))
    }

    saveSchedulerChanges(newTasks) {

        //date from state
        let jobs = [...this.state.jobs];
        let job = {...jobs.find(job => job.id === this.state.selected[0])};
        let index = jobs.findIndex(job => job.id === this.state.selected[0]);
        let status = {...job.status}

        //seperate tasks from Scheduler into categories
        const completedTasks = [...newTasks.filter((task) => task.actionTaken !== "")];
        const scheduledTasks = [...newTasks.filter((task) => task.actionTaken === "")];

        //add completed actions to log
        if (completedTasks.length > 0) {
            completedTasks.forEach(task => {

                //date logged when scheduler is closed
                task.date = moment();

                // Update status based on actions taken
                switch(task.actionTaken){
                    case "Changes to Artist":
                        status = {...status, changesAtArtist: moment(), artAtClient: undefined};
                        console.log("Changes At Artist");
                        break;
                    case "Proof to Client":
                        status = {...status, artAtClient: moment()};
                        break;
                    case "Proof Approved":
                        status = {...status, proofApproved: true};
                        break;
                    case "Proof Unapproved":
                        status = {...status, proofApproved: false, changesAtArtist: undefined, artAtClient: undefined,};
                        break;
                    case "Map Approved":
                        status = {...status, mapApproved: true};
                        break;
                    case "Map Unapproved":
                        status = {...status, mapApproved: false};
                        break;
                    case "Print Approved":
                        status = {...status, printApproved: true};
                        break;
                    case "Print Unapproved":
                        status = {...status, printApproved: false};
                        break;
                    case "Order Completed":
                        status = {...status, complete: true};
                        break;
                    default:
                        break;
                }
                job.status = status;

                //put completed task into last actions array
                let lastActions = [...job.lastActions];
                lastActions.unshift(task);
                job.lastActions = lastActions;
            });
        }

        //replace scheduled tasks with new scheduled tasks
        job.scheduledTasks = scheduledTasks

        //replace old info with new data from the Scheduler
        jobs.splice(index, 1, job);

        //update state
        this.setState({ jobs });
    }

    changeSortBy(sortBy) {
        if (sortBy === this.state.sortBy) {
            this.setState((state) => ({ sortDirection: !state.sortDirection }));
        } else {
            this.setState({ sortBy, sortDirection: true });
        }
    }

    changeFilterStartDate(e) {
        this.clearSelected();
        this.setState({ filterDateStart: moment(e.target.value) });
    }

    changeFilterEndDate(e) {
        this.clearSelected();
        this.setState({ filterDateEnd: moment(e.target.value) });
    }

    changeFilterSpecialist(e) {
        this.clearSelected();
        this.setState({ filterSpecialist: e.target.value });
    }

    changeFilterClientLabel(label) {
        this.clearSelected();
        let filterClientLabel = [...this.state.filterClientLabel];

        if (!filterClientLabel.includes(label)) {
            filterClientLabel.push(label)
        } else {
            const index = filterClientLabel.indexOf(label);
            filterClientLabel.splice(index, 1);
        }

        this.setState({ filterClientLabel });
    }

    changeFilterProduct(e) {
        this.clearSelected();
        this.setState({ filterProduct: e.target.value });
    }

    toggleHideCompleted() {
        this.clearSelected();
        this.setState(state => ({ hideCompleted: !state.hideCompleted }));
    }

    changeFilterSearchWord(word, e) {
        e.preventDefault();
        this.clearSelected();
        this.setState({ filterSearchWord: word });
    }

    changeTab(tabName, e){
        e.preventDefault()
        this.restoreDefaultFilters();
        this.setState({tab: tabName});
    }

    addLastAction(task) {
        //date from state
        let jobs = [...this.state.jobs];
        let job = {...jobs.find(job => job.id === this.state.selected[0])};
        let index = jobs.findIndex(job => job.id === this.state.selected[0]);

        //add task to last actions array
        let lastActions = [...job.lastActions];
        lastActions.unshift(task);
        job.lastActions = lastActions;

        //replace old info with new data from the Scheduler
        jobs.splice(index, 1, job);

        //update state
        this.setState({ jobs });
    }

    handleSelectAll() {
        if (this.state.allSelected) {
            this.setState({
                selected: [],
                allSelected: false,
            })
        } else {
            const filteredJobs = filterJobs(this.state);
            let ids = [];

            filteredJobs.forEach((job) => ids.push(job.id));

            this.setState({
                selected: ids,
                allSelected: true,
            })
        }
    }

    clearSelected() {
        this.setState({
            selected: [],
            allSelected: false,
        })
    }

    restoreDefaultFilters(){
        this.clearSelected();
        this.setState({
            filterDateStart: moment().subtract(7, "days"),
            filterDateEnd: moment().add(21, "days"),
            filterSpecialist: "all",
            filterClientLabel: "all",
            filterProduct: "all",
            hideCompleted: true,
            filterSearchWord: "",
        })
    }

    openSchedulerFromLine(id) {
        this.setState({
            selected: [id],
            showScheduler: true,
        })
    }

    render() {
        const firstSelectedJob = this.state.jobs.find(job => job.id === this.state.selected[0]);

        // filter and sort jobs
        const filteredJobs = filterJobs(this.state)
        const sortedJobs = sortJobs(this.state.sortBy, filteredJobs, this.state.sortDirection);

        // find client labels
        let clientLabelOptions = new Set();
        this.state.jobs.forEach((job) => {
            if (job.label !== "Default" && !clientLabelOptions.has(job.label)) {
                clientLabelOptions.add(job.label);
            }
        })

        // find products
        let productOptions = new Set();
        filteredJobs.forEach((job) => {
            if (!productOptions.has(job.product)) {
                productOptions.add(job.product);
            }
        })

        return (
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/log/:id">
                            <>
                                <h1>Master Log</h1>
                                <MasterLog jobs={this.state.jobs} />
                            </>
                        </Route>
                        <Route path="/">
                            <>
                                <h1>Account Specialist Tracking Report</h1>
                                <Actions
                                    selected={this.state.selected}
                                    handleAddLabel={this.addLabel}
                                    labelOptions={[...clientLabelOptions]}
                                    handleReassign={this.reassignSpecialist}
                                    handleQuickAction={this.takeQuickAction}
                                    openScheduler={() => this.toggleScheduler()}
                                    addLastAction={this.addLastAction}
                                />
                                <div className="table-filters">
                                    <div className="table-filters_tabs">
                                        <button
                                            className={`table-tab ${this.state.tab === "Weekly" && "active"}`}
                                            onClick={(e) => this.changeTab("Weekly", e)}
                                        >Weekly</button>
                                        <button
                                            className={`table-tab ${this.state.tab === "Monthly" && "active"}`}
                                            onClick={(e) => this.changeTab("Monthly", e)}
                                        >Monthly</button>
                                    </div>
                                    <form className="table-filters_form">
                                        <DateFilter
                                            start={this.state.filterDateStart}
                                            end={this.state.filterDateEnd}
                                            changeStartDate={this.changeFilterStartDate}
                                            changeEndDate={this.changeFilterEndDate}
                                        />
                                        <SpecialistFilter
                                            specialist={this.state.filterSpecialist}
                                            changeSpecialist={this.changeFilterSpecialist}
                                            isAdmin={this.state.isAdmin}
                                        />
                                        <ClientLabelFilter
                                            labels={this.state.filterClientLabel}
                                            options={[...clientLabelOptions]}
                                            changeClientLabel={this.changeFilterClientLabel}
                                        />
                                        <ProductFilter
                                            product={this.state.filterProduct}
                                            tab={this.state.tab}
                                            changeProduct={this.changeFilterProduct}
                                        />
                                        <CheckboxFilter
                                            checked={this.state.hideCompleted}
                                            handleToggle={this.toggleHideCompleted}
                                            label="Hide Completed"
                                        />
                                        <SearchFilter
                                            filterSearchWord={this.state.filterSearchWord}
                                            changeFilterSearchWord={this.changeFilterSearchWord}
                                        />
                                    </form>
                                </div>
                                <Table
                                    handleHeaderClick={this.changeSortBy}
                                    handleSelectAll={() => this.handleSelectAll()}
                                    allSelected={this.state.allSelected}
                                >
                                    {sortedJobs.map((job, index) =>
                                        <JobRow
                                            job={job}
                                            selected={this.state.selected.includes(job.id)}
                                            handleCheckbox={(e) => this.editSelected(job.id, e)}
                                            openSchedulerFromLine={() => this.openSchedulerFromLine(job.id)}
                                            key={job.id}
                                        />)
                                    }
                                </Table>
                                <button onClick={(e) => e.preventDefault()}>Print Report</button>
                            </>
                        </Route>
                    </Switch>
                </main>
                <SystemActions
                    specialist={this.state.user}
                    changeSpecialist={this.changeUser}
                    handleSystemAction={this.handleSystemAction}
                    disabled={this.state.selected.length !== 1}
                    job={firstSelectedJob}
                />
                {this.state.showScheduler ?
                    <Scheduler
                        close={() => this.toggleScheduler()}
                        job={firstSelectedJob}
                        saveChanges={this.saveSchedulerChanges}
                        completedBy={this.state.user}
                    /> :
                    null
                }
            </Router>
        );
    }
}

export default App;

