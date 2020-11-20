import React, { Component } from 'react';

import iconDropdown from "../../images/icon-dropdown.svg";

class ClientLabelFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            showOptions: false,
        }
    }

    handleCheckOption(e, option){
        this.props.changeClientLabel(option);
    }

    toggleShowOptions(e){
        e.preventDefault();
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    render(){
        return (
            <div className="filter-labels_wrapper">
                <button
                    className="fake-dropdown"
                    onClick={(e) => this.toggleShowOptions(e)}
                >
                    {`Labels (${this.props.labels.length}/${this.props.options.length + 1})`}
                    <img src={iconDropdown} alt="arrow"/>
                </button>
                {this.state.showOptions && 
                    <DropDown close={(e) => this.toggleShowOptions(e)}>
                            <div>
                                <input
                                    type="checkbox"
                                    name={`labelOp-default`}
                                    onChange={(e) => this.handleCheckOption(e, "Default")}
                                    checked={this.props.labels.includes("Default")}/>
                                <label htmlFor={`labelOp-default`}>Default</label>
                            </div>
                        {this.props.options.map((option, index) => 
                            <div key={`labelOp-${index}`} className="flex align-center">
                                <input
                                    type="checkbox"
                                    name={`labelOp-${index}`}
                                    onChange={(e) => this.handleCheckOption(e, option)}
                                    checked={this.props.labels.includes(option)}
                                />
                                <label htmlFor={`labelOp-${index}`}>{option}</label>
                            </div>
                        )}
                    </DropDown>
                }
            </div>
        )
    }
}

class DropDown extends Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }
    
    handleClickOutside = event => {
        if (this.myRef && !this.myRef.current.contains(event.target)) {
            this.props.close(event);
        }
    }

    render(){
        return(
            <div
                className="filter-labels_drop"
                ref={this.myRef}
            >
            {this.props.children}
            </div>
        )
    }
}

export default ClientLabelFilter;