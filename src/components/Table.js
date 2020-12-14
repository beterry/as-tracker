import React, { Component, useState } from 'react';
import iconSort from '../images/icon-sort.svg'

const SortOptions = ({children}) => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div className="sort-options">
            <button
                className='btn-icon'
                style={{background: showOptions ? 'rgba(0,0,0,.2)' : null}}
                onClick={() => setShowOptions(!showOptions)}
            >
                <img src={iconSort} alt='sort icon' />
            </button>
            {showOptions &&
                <div className='sort-options_dropdown'>{children}</div>
            }
        </div>
    )
}

export default class Table extends Component {

    render() {
        return (
            <section className="table">
                <div className="table-container">

                    <div className="flex align-center justify-between label-wrapper">
                        <div className="flex align-center">
                            <label className="mr-s">Select client labels: </label>
                            {this.props.labelFilter}
                        </div>
                        <p className="showing-text">Showing <strong>{this.props.shownJobs}</strong> / {this.props.totalJobs}</p>
                    </div>
                    
                    <table border="1">
                        <thead>
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        onChange={this.props.handleSelectAll}
                                        checked={this.props.allSelected}
                                    />
                                </th>
                                <th onClick={(e) => this.props.handleHeaderClick("push", e)}>Psh</th>
                                <th onClick={(e) => this.props.handleHeaderClick("group", e)}>Grp</th>
                                <th onClick={(e) => this.props.handleHeaderClick("timezone", e)}>TZ</th>
                                <th onClick={(e) => this.props.handleHeaderClick("code", e)}>Code</th>
                                <th onClick={(e) => this.props.handleHeaderClick("company", e)}>Company</th>
                                <th onClick={(e) => this.props.handleHeaderClick("product", e)}>Product</th>
                                <th>
                                    <div className="flex justify-between align-center">
                                        Scheduled Task
                                        <SortOptions>
                                            <button onClick={(e) => this.props.handleHeaderClick("scheduledTasks", e)}>Due</button>
                                            <button onClick={(e) => this.props.handleHeaderClick("taskAction", e)}>Action</button>
                                        </SortOptions>
                                    </div>
                                </th>
                                <th onClick={(e) => this.props.handleHeaderClick("lastAction", e)}>Last Action</th>
                                <th>V#</th>
                                <th>Options</th>
                                <th onClick={(e) => this.props.handleHeaderClick("quantity", e)}>Qty</th>
                                <th onClick={(e) => this.props.handleHeaderClick("weeks", e)}>Wks</th>
                                <th onClick={(e) => this.props.handleHeaderClick("specialist", e)}>Spec</th>
                                <th>Note</th>
                                <th 
                                    onClick={(e) => this.props.handleHeaderClick("status", e)}
                                    className="col-pbar"
                                >
                                    <div className="pbar">
                                        <p className="pbar-bar">Proof</p>
                                        <p className="pbar-bar">Print</p>
                                        <p className="pbar-bar">Map</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                    </table>
                    <div className="count-box">
                        <h3>Total Orders: <strong>12</strong></h3>
                        <h3>Mailing Orders: <strong>11</strong></h3>
                        <button onClick={(e) => e.preventDefault()}>Print Report</button>
                    </div>
                </div>
            </section>
        )
    }
}
