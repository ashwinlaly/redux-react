import React, { Component } from 'react';

const Span = (props) => {
    return (
        <span> {props.text}</span>
    )
}

const Div = (props) => {
    return (
        <span> {props.text} </span>
    )
}

const withSubscription = (WrappedComponent, selectData) => {
    return class extends Component {
        render() {
            return (
                <WrappedComponent text={selectData} />
            )
        }
    }
}

const SpanWithSubscription = withSubscription(Span , 'His')
const DivWithSubscription = withSubscription(Div , 'Hid')


export default class index extends Component {
    render() {
        return (
            <>
                <SpanWithSubscription text="Hi" />
                <DivWithSubscription text="Hi" />
            </>
        )
    }
}