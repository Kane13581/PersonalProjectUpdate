import React, { Component } from 'react'

export default class JAVASCRIPT extends Component {

    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })

    }

    render() {
        return (
            <div>
                <div>
                    {this.state.on && (<h1 className="AboutComponentsH1">How to use variables, functions, objects, scope, AJAX, jQuery, DOM.</h1>)}
                    <button className="AboutComponentButton" onClick={this.toggle}> JAVASCRIPT </button>
                </div>
            </div>
        )
    }
}
