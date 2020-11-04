import React, { Component } from 'react';
import './styles/App.scss';

//import components
import Header from './components/Header';
import Actions from './components/Actions';
import Table from './components/Table';
import JobRow from './components/JobRow';

//import data
import data from './data/database'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobs: data,
            selected: []
        };
        this.editSelected = this.editSelected.bind(this);
        this.addType = this.addType.bind(this);
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
        // console.log(allJobs);
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
          </>
        );
    }
}

export default App;
