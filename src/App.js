import React, { Component } from 'react';
import './styles/App.scss';

//import components
import Header from './components/Header'
import Controls from './components/Controls'
import Table from './components/Table'
import JobRow from './components/JobRow';

//import data
import data from './data/database'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobs: data,
            selected: []
        }
        this.editSelected = this.editSelected.bind(this)
    }

    editSelected(id, e){
        let selected = this.state.selected
        if (!this.state.selected.includes(id)){
            selected.push(id)
        } else {
            const index = selected.indexOf(id);
            selected.splice(index, 1);
        }
        this.setState({selected})
    }

    render(){
        return (
            <>
              <Header />
              <main>
                    <Controls />
                    <Table>
                        <tbody>
                            {this.state.jobs.map(job => 
                                <JobRow
                                    job={job}
                                    selected={this.state.selected.includes(job.id)}
                                    handleCheckbox={(e) => this.editSelected(job.id, e)}
                                    key={job.id}
                                />)
                            }
                        </tbody>
                    </Table>
              </main>
          </>
        );
    }
}

export default App;
