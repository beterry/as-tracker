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

//import data
import data from './data/database';
import jobStatus from './data/jobStatus';

//utility libraries
import moment from 'moment';
import sortJobs from './util/sortJobs';
import filterJobs from './util/filterJobs';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobs: data,
            selected: [],
            specialist: "LucusT",
            isAdmin: false,
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
        };
        this.editSelected = this.editSelected.bind(this);
        this.addType = this.addType.bind(this);
        this.reassignSpecialist = this.reassignSpecialist.bind(this);
        this.takeQuickAction = this.takeQuickAction.bind(this);
        this.handleSaveAndCloseScheduler = this.handleSaveAndCloseScheduler.bind(this);
        this.changeSortBy = this.changeSortBy.bind(this);
        this.changeFilterStartDate = this.changeFilterStartDate.bind(this);
        this.changeFilterEndDate = this.changeFilterEndDate.bind(this);
        this.changeFilterSpecialist = this.changeFilterSpecialist.bind(this);
        this.changeFilterClientType = this.changeFilterClientType.bind(this);
        this.toggleHideCompleted = this.toggleHideCompleted.bind(this);
        this.changeFilterSearchWord = this.changeFilterSearchWord.bind(this);
        this.addLastAction = this.addLastAction.bind(this);
        this.clearSelected = this.clearSelected.bind(this);
    }

    editSelected(id, e){
        let selected = this.state.selected;
        const filteredJobs = filterJobs(this.state);

        if (!this.state.selected.includes(id)){
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

    addType(label, e){
        e.preventDefault();
        // console.log(label);

        let jobs = this.state.jobs

        this.state.selected.forEach(id => {
            let job = this.state.jobs.find(job => job.id === id);
            let index = this.state.jobs.findIndex(job => job.id === id);

            job.label = label;

            jobs.splice(index, 1, job);
        })

        this.setState({jobs})
        // console.log(jobs);
    }

    reassignSpecialist(name, e){
        e.preventDefault();
        // console.log(`running action: ${name}`);

        let jobs = this.state.jobs

        this.state.selected.forEach(id => {
            let job = this.state.jobs.find(job => job.id === id);
            let index = this.state.jobs.findIndex(job => job.id === id);

            job.acctSpecialist = name;

            jobs.splice(index, 1, job);
        })

        this.setState({jobs})
        console.log(jobs);
    }

    takeQuickAction(actionTaken, e){
        e.preventDefault();
        let what = actionTaken

        let tempAction = {
            action: "Quick Action",
            who: "",
            what,
            date: moment(),
            acctSpecialist: this.state.specialist,
            actionTaken,
            note: []
        }

        let jobs = this.state.jobs

        this.state.selected.forEach(id => {
            let job = this.state.jobs.find(job => job.id === id);
            const index = this.state.jobs.findIndex(job => job.id === id);

            job.lastActions.unshift(tempAction);

            if (jobStatus[actionTaken]){
                job.status = jobStatus[actionTaken];
                console.log("Quick action status change:", jobStatus[actionTaken]);
            }

            jobs.splice(index, 1, job);
            // console.log(job);
        })

        this.setState({jobs})
    }

    toggleScheduler(){
        this.setState(state => ({
            showScheduler: !this.state.showScheduler
        }))
    }

    closeScheduler(){
        this.setState({showScheduler: false});
    }

    handleSaveAndCloseScheduler(newScheduledTasks, e){
        e.preventDefault();
        
        //date from state
        let jobs = this.state.jobs;
        let job = this.state.jobs.find(job => job.id === this.state.selected[0]);
        let index = this.state.jobs.findIndex(job => job.id === this.state.selected[0]);

        //seperate tasks from Scheduler into categories
        const completedTasks = newScheduledTasks.filter((task) => task.actionTaken !== "");
        const scheduledTasks = newScheduledTasks.filter((task) => task.actionTaken === "");

        //add completed actions to log
        if (completedTasks.length > 0){
            completedTasks.forEach(task => {
                if (jobStatus[task.actionTaken]){
                    job.status = jobStatus[task.actionTaken];
                    console.log("Scheduler status change:", jobStatus[task.actionTaken]);
                }
    
                task.date = moment();
                job.lastActions.unshift(task);
    
            });
        }

        //replace scheduled tasks with new scheduled tasks
        job.scheduledTasks = scheduledTasks

        //replace old info with new data from the Scheduler
        jobs.splice(index, 1, job);

        //update state
        this.setState({jobs});
    }

    changeSortBy(sortBy){
        if (sortBy === this.state.sortBy){
            this.setState((state) => ({sortDirection: !state.sortDirection}));
        }else{
            this.setState({sortBy, sortDirection: true});
        }
    }

    changeFilterStartDate(e){
        this.clearSelected();
        this.setState({filterDateStart: moment(e.target.value)});
    }

    changeFilterEndDate(e){
        this.clearSelected();
        this.setState({filterDateEnd: moment(e.target.value)});
    }

    changeFilterSpecialist(e){
        this.clearSelected();
        this.setState({filterSpecialist: e.target.value});
    }

    changeFilterClientType(e){
        this.clearSelected();
        this.setState({filterClientType: e.target.value});
    }

    toggleHideCompleted(){
        this.clearSelected();
        this.setState(state => ({hideCompleted: !state.hideCompleted}));
    }

    changeFilterSearchWord(word, e){
        e.preventDefault();
        this.clearSelected();
        this.setState({filterSearchWord: word});
    }

    addLastAction(task){
        //date from state
        let jobs = this.state.jobs;
        let job = this.state.jobs.find(job => job.id === this.state.selected[0]);
        let index = this.state.jobs.findIndex(job => job.id === this.state.selected[0]);

        //add task to last actions array
        job.lastActions.unshift(task);

        //replace old info with new data from the Scheduler
        jobs.splice(index, 1, job);

        //update state
        this.setState({jobs});
    }

    handleSelectAll(){
        if (this.state.allSelected){
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

    clearSelected(){
        this.setState({
            selected: [],
            allSelected: false,
        })
    }

    render(){
        const firstSelectedJob = this.state.jobs.find(job => job.id === this.state.selected[0]);
        
        const filteredJobs = filterJobs(this.state)
        const sortedJobs = sortJobs(this.state.sortBy, filteredJobs, this.state.sortDirection);

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
                                    />
                                    <ClientTypeFilter
                                        clientType={this.state.filterClientType}
                                        options={["marcos", "fox"]}
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
                                        
                                        key={job.id}
                                    />)
                                }
                            </Table>
                        </>
                    </Route>
                </Switch>
              </main>
              {this.state.showScheduler ?
                <Scheduler
                    close={() => this.closeScheduler()}
                    job={firstSelectedJob}
                    saveScheduledTasks={this.handleSaveAndCloseScheduler}
                />:
                null
              }
          </Router>
        );
    }
}

export default App;

