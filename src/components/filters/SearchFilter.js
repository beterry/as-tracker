import React, { Component } from 'react'

export default class SearchFilter extends Component {
    constructor(props){
        super(props);
        this.state = ({searchWord: props.filterSearchWord});
    }

    handleChangeInput(e){
        this.setState({searchWord: e.target.value});
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Client name"
                    value={this.state.filterSearchWord}
                    onChange={(e) => this.handleChangeInput(e)}
                    type="search"
                />
                <button onClick={(e) => this.props.changeFilterSearchWord(this.state.searchWord, e)}>Search</button>
            </div>
        )
    }
}

