import React, { Component } from 'react';

export default class Table extends Component {

    render() {
        return (
            <section className="table">
                <div className="table-tabs">
                    <button>Weekly</button>
                    <button>Monthly</button>
                </div>
                <div className="table-container">
                    <table border="1">
                        <thead>
                            <tr>
                                <th><input type="checkbox" readOnly/></th>
                                <th>Psh</th>
                                <th>Grp</th>
                                <th>TZ</th>
                                <th>Code</th>
                                <th>Company</th>
                                <th>Product</th>
                                <th>Scheduled Task</th>
                                <th>Last Action</th>
                                <th>V#</th>
                                <th>Options</th>
                                <th>Qty</th>
                                <th>Wks</th>
                                <th>Spec</th>
                                <th>Note</th>
                                <th>Proof - Print - Map</th>
                            </tr>
                        </thead>
                        {this.props.children}
                    </table>
                </div>
            </section>
        )
    }
}
