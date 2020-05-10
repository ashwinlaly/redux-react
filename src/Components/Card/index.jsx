import React, { Fragment, Component } from 'react';
import Avator from './Avator';
import UserInfo from './UserInfo';
import './Card.css';

class index extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            enable :true
        }
        this.enableHandler = this.enableHandler.bind(this)
    }

    enableHandler() {
        this.setState((state, props) => ({
            enable : !state.enable
        }))
    }

    componentDidMount() {
        console.log("card mount")
    }

    componentWillUnmount() {
        console.log("card unmount")
    }

    render(){
        console.log("card render")
        return (
            <Fragment>
                {
                    this.props.users.map((data, i) => {
                        return (
                            <div className="card" key={i}>
                                <div className="card-body row">
                                    <div className="col-lg-4">
                                        { (this.state.enable) ? <Avator name={data.name} image={data.image}/> : null}
                                    </div>
                                    <div className="col-lg-7">
                                        <UserInfo name={data.name} email={data.email} age={data.age} />
                                    </div>
                                    <div className="col-lg-1">
                                        <button className="btn btn-primary" onClick={this.enableHandler}>Card {(this.state.enable) ? 'Disable' : 'Enable' }</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default index;