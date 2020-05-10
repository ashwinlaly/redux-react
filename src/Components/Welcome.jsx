import React, { Component } from 'react';
import Card from './Card';

let data = require('../Service/data.json');

class Welcome extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : data,
            enable : true
        }
    }

    enableHandler = (field) => {
        this.setState((state, props) => ({
            [field] : !state[field]
        }))
    }

    componentDidMount() {
        console.log("Welcome mount")
    }

    componentWillUnmount() {
        console.log("Welcome unmount")
    }

    render(){
        console.log("Welcome render")
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={() => this.enableHandler('enable')}>Welcome {(this.state.enable) ? 'Disable' : 'Enable' }</button>
                { (this.state.enable) ?  <Card users={ data } /> : null }
            </div>
        )
    }
}

export default Welcome;