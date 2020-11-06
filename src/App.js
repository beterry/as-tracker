import React, { Component } from 'react';
import './styles/App.scss';

//import components
import Header from './components/Header';
import Actions from './components/Actions';
import Table from './components/Table';
import JobRow from './components/JobRow';
import Scheduler from './components/Scheduler';

//import data
import data from './data/database'

//utility libraries
import moment from 'moment';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobs: data,
            selected: [],
            specialist: "LucusT",
            isAdmin: false,
            showScheduler: false,
        };
        this.editSelected = this.editSelected.bind(this);
        this.addType = this.addType.bind(this);
        this.reassignSpecialist = this.reassignSpecialist.bind(this);
        this.takeAction = this.takeAction.bind(this);
        this.handleSaveAndCloseScheduler = this.handleSaveAndCloseScheduler.bind(this);
    }

    editSelected(id, e){
        let selected = this.state.selected;
        if (!this.state.selected.includes(id)){
            selected.push(id)
        } else {
            const index = selected.indexOf(id);
            selected.splice(index, 1);
        }
        this.setState({selected});
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

    takeAction(action, e){
        e.preventDefault();
        let what = ""
        let actionTaken = ""
        
        switch(action){
            case "proof-artist":
                what = "Art";
                actionTaken = "Changes sent to the artist"
                break;
            case "proof-upload":
                what = "Art";
                actionTaken = "Art Uploaded"
                break;
            case "proof-client":
                what = "Art";
                actionTaken = "Art proof sent to the client"
                break;
            case "proof-approve":
                what = "Art";
                actionTaken = "Art approved"
                break;
            case "proof-unapprove":
                what = "Art";
                actionTaken = "Art unapproved"
                break;
            default:
                what = "Action";
                action = "Default quick action"
        }

        let tempAction = {
            action: "Quick",
            who: "Action",
            what,
            date: moment(),
            acctSpecialist: this.state.specialist,
            actionTaken,
            note: []
        }

        let jobs = this.state.jobs

        this.state.selected.forEach(id => {
            let job = this.state.jobs.find(job => job.id === id);
            let index = this.state.jobs.findIndex(job => job.id === id);

            job.lastActions.unshift(tempAction);

            jobs.splice(index, 1, job);
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
        completedTasks.forEach(task => job.lastActions.unshift(task));

        //replace scheduled tasks with new scheduled tasks
        job.scheduledTasks = scheduledTasks

        //replace old info with new data from the Scheduler
        jobs.splice(index, 1, job);

        //update state
        this.setState({jobs});
    }

    render(){
        const firstSelectedJob = this.state.jobs.find(job => job.id === this.state.selected[0]);
        return (
            <>
              <Header />
              <main>
                    <h1>Account Specialist Tracking Report</h1>
                    <Actions 
                        numberSelected={this.state.selected.length}
                        handleAddType={this.addType}
                        handleReassign={this.reassignSpecialist}
                        handleApplyAction={this.takeAction}
                        openScheduler={() => this.toggleScheduler()}
                    />
                    <Table>
                        {this.state.jobs.map((job, index) => 
                            <JobRow
                                job={job}
                                selected={this.state.selected.includes(job.id)}
                                handleCheckbox={(e) => this.editSelected(job.id, e)}
                                key={job.id}
                            />)
                        }
                    </Table>
              </main>
              {this.state.showScheduler ?
                <Scheduler
                    close={() => this.closeScheduler()}
                    job={firstSelectedJob}
                    saveScheduledTasks={this.handleSaveAndCloseScheduler}
                />:
                null
              }
          </>
        );
    }
}

export default App;

