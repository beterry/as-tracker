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
import ClientTypeFilter from './components/filters/ClientTypeFilter';
import CheckboxFilter from './components/filters/CheckboxFilter';
import SearchFilter from './components/filters/SearchFilter';

import UserSwitcher from './components/filters/UserSwitcher';

//import data
import data from './data/database';
import jobStatus from './data/jobStatus';

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
            filterClientType: "all",
            hideCompleted: true,
            filterSearchWord: "",
            allSelected: false,
            user: "TarrynH",
            isAdmin: true,
        };
        this.editSelected = this.editSelected.bind(this);
        this.addType = this.addType.bind(this);
        this.reassignSpecialist = this.reassignSpecialist.bind(this);
        this.takeQuickAction = this.takeQuickAction.bind(this);
        this.saveSchedulerChanges = this.saveSchedulerChanges.bind(this);
        this.changeSortBy = this.changeSortBy.bind(this);
        this.changeFilterStartDate = this.changeFilterStartDate.bind(this);
        this.changeFilterEndDate = this.changeFilterEndDate.bind(this);
        this.changeFilterSpecialist = this.changeFilterSpecialist.bind(this);
        this.changeFilterClientType = this.changeFilterClientType.bind(this);
        this.toggleHideCompleted = this.toggleHideCompleted.bind(this);
        this.changeFilterSearchWord = this.changeFilterSearchWord.bind(this);
        this.addLastAction = this.addLastAction.bind(this);
        this.clearSelected = this.clearSelected.bind(this);
        this.changeUser = this.changeUser.bind(this);
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

    addType(label, e) {
        e.preventDefault();
        // console.log(label);

        let jobs = [...this.state.jobs]

        this.state.selected.forEach(id => {
            let job = {...jobs.find(job => job.id === id)};
            let index = jobs.findIndex(job => job.id === id);

            job.label = label;

            jobs.splice(index, 1, job);
        })

        this.setState({ jobs })
        console.log(jobs);
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

    takeQuickAction(actionTaken, e) {
        e.preventDefault();
        let what = actionTaken

        let tempAction = {
            action: "Quick Action",
            who: "",
            what,
            date: moment(),
            acctSpecialist: this.state.specialist,
            actionTaken,
            completedBy: this.state.user,
            note: []
        }

        let jobs = [...this.state.jobs]

        this.state.selected.forEach(id => {
            let job = {...jobs.find(job => job.id === id)};
            const index = jobs.findIndex(job => job.id === id);

            //add actions to last actions array
            let lastActions = [...job.lastActions];
            lastActions.unshift(tempAction);
            job.lastActions = lastActions

            //update job status
            if (jobStatus[actionTaken]) {
                job.status = jobStatus[actionTaken];
                console.log("Quick action status change:", jobStatus[actionTaken]);
            }

            //increment proof number
            if (actionTaken === "Proof Uploaded") {
                job.proofs += 1;
            }

            //increment proof number
            if (actionTaken === "Print Posted") {
                job.prints += 1;
            }

            jobs.splice(index, 1, job);
            // console.log(job);
        })

        this.setState({ jobs })
    }

    toggleScheduler() {
        this.setState(state => ({
            showScheduler: !this.state.showScheduler,
        }))
    }

    saveSchedulerChanges(newTasks) {
        console.log("Save and close scheduler");

        //date from state
        let jobs = [...this.state.jobs];
        let job = {...jobs.find(job => job.id === this.state.selected[0])};
        let index = jobs.findIndex(job => job.id === this.state.selected[0]);

        //seperate tasks from Scheduler into categories
        const completedTasks = [...newTasks.filter((task) => task.actionTaken !== "")];
        const scheduledTasks = [...newTasks.filter((task) => task.actionTaken === "")];

        //add completed actions to log
        if (completedTasks.length > 0) {
            completedTasks.forEach(task => {
                if (jobStatus[task.actionTaken]) {
                    job.status = jobStatus[task.actionTaken];
                    console.log("Scheduler status change:", jobStatus[task.actionTaken]);
                }

                //date logged when scheduler is closed
                task.date = moment();

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

    changeFilterClientType(e) {
        this.clearSelected();
        this.setState({ filterClientType: e.target.value });
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

        // find client types
        let clientTypes = new Set();
        this.state.jobs.forEach((job) => {
            if (job.label !== "" && !clientTypes.has(job.label)) {
                clientTypes.add(job.label);
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
                                    handleAddType={this.addType}
                                    handleReassign={this.reassignSpecialist}
                                    handleQuickAction={this.takeQuickAction}
                                    openScheduler={() => this.toggleScheduler()}
                                    addLastAction={this.addLastAction}
                                />
                                <div className="table-filters">
                                    <div className="table-filters_tabs">
                                        <button
                                            className="table-tab active"
                                            onClick={(e) => e.preventDefault()}
                                        >Weekly</button>
                                        <button
                                            className="table-tab"
                                            onClick={(e) => e.preventDefault()}
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
                                        <ClientTypeFilter
                                            clientType={this.state.filterClientType}
                                            options={[...clientTypes]}
                                            changeClientType={this.changeFilterClientType}
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
                <UserSwitcher
                    specialist={this.state.user}
                    changeSpecialist={this.changeUser}
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

