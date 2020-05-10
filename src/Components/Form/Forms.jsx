import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

export default class Forms extends Component{
    // static contextType = Theme;
    constructor(props){
        super(props)        
        console.log("Constructor Forms")
    }
    // static getDerivedStateFromProps(){
    //     console.log("getDerivedStateFromProps Forms")
    // }
    componentDidMount(){
        console.log("ComponentDidMount Forms")
    }

    render(){
        console.log("render Forms")
        return (
            <>
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input ref={this.props.emailRef} type="text" className="form-control" id="email" name="email" value={this.props.email} placeholder="Name" onChange={(event) => this.props.handleChange(event)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" name="password" placeholder="password" value={this.props.password} onChange={(event) => this.props.handleChange(event)}/>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" name="Submit"/>
                </form>
            </>
        )
    }
}

Forms.defaultProps = {
    email : 'ashwinlaly@gmail.com'
}
Forms.propTypes  = {
    email : PropTypes.string,
    password : PropTypes.string,
    handleSubmit : PropTypes.func
}
// Forms.contextType = ThemeContext

const Banner = (props) => {
    return (
        <div className="card">
            <Body>
                {props.children}
            </Body>
        </div>
    )
}

const Body = (props) => {
    return (
        <Fragment>
            <div className="card-body">
                {props.children}
            </div>
            <Footer />
        </Fragment>
    )
}

const Footer = () => {
    return (
        <div className="card-footer">
            
        </div>
    )
}