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
        console.log(`running action: ${action}`);
        let what = ""
        
        switch(action){
            case "proof-artist":
                what = "Changes sent to Artist";
                break;
            case "proof-upload":
                what = "Proof Uploaded";
                break;
            case "proof-client":
                what = "Sent proof to client";
                break;
            case "proof-approve":
                what = "Approved proof";
                break;
            case "proof-unapprove":
                what = "Upapproved proof";
                break;
            default:
                what = "Action taken";
        }

        let tempAction = {
            action: "Quick",
            who: "Action",
            what: what,
            date: moment(),
            acctSpecialist: this.state.specialist,
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

    toggleScheduler(e){
        e.preventDefault()
        this.setState(state => ({
            showScheduler: !this.state.showScheduler
        }))
    }

    render(){
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
                        toggleScheduler={(e) => this.toggleScheduler(e)}
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
              {this.state.showScheduler && this.state.selected[0] ?
                <Scheduler
                    toggle={(e) => this.toggleScheduler(e)}
                    job={this.state.jobs.find(job => job.id === this.state.selected[0])}
                />:
                null
              }
          </>
        );
    }
}

export default App;

