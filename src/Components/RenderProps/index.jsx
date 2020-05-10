import React, { Component } from 'react';

class MouseTracker extends Component{
    constructor(props){
        super(props)
        this.state = {
            x : 0,
            y : 0
        }
    }

    handleMouseMove = (e) => {
        e.persist()
        this.setState(state => {
          return {
            x : e.clientX,
            y : e.clientY
          }
        })
    }

    render() {
        return (
            <div style={{height: '100px', color: 'red'}} onMouseMove={(e) => this.handleMouseMove(e)}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

class Cat extends Component {
    render(){
        return (
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
                 style={{ left: this.props.x, right: this.props.y, position: 'absolute'}} height="10" width="10" />
        )
    }
}

const MousePoint = (props) => {
    return (
        <>
            x = {props.x} - y = {props.y}
        </>
    )
}

export default class index extends Component {
    render(){
        return (
            <div>
                <MouseTracker render={mouse => (
                    <Cat x={mouse.x} y={mouse.y} />
                )}/>
                <MouseTracker render={mouse => (
                    <MousePoint x={mouse.x} y={mouse.y} />
                )}/>
            </div>
        )
    }
}