import React , { Component, Suspense, createRef } from 'react';
// import Error from '../Error';
const Forms = React.lazy(() => import('./Forms'))

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
        this.emailRef = createRef()
        console.log("Constructor index")
    }

    componentDidMount(){
        console.log("ComponentDidMount index")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate index")
    }

    componentWillMount(){
        console.log("componentWillMount index")
    }

    handleChange = (event) => {
        const { target : { name, value} } = event
        this.setState({ [name] : value })
        console.log(this.emailRef.current.value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // fetch("http://staging.usis.in/wms/webservice/index.php/api/capp/index_post").then(res => res.json()).then(res => console.log(res))
        console.log(this.state)
    }

    render(){
        console.log("render index")
        return (
            // <Error>
                <Suspense fallback={<div>loading...</div>}>
                    <Forms email={this.state.email} emailRef={this.emailRef} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                </Suspense>
            // </Error>
        )
    }
}