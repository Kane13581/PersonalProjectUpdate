import React, { Component } from 'react'

export default class HTTP extends Component {

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
                    {this.state.on && (<h1 className="AboutComponentsH1">Fundamentals about the protocol: methods, headers, error codes.</h1>)}
                    <button className="AboutComponentButton" onClick={this.toggle}> HTTP </button>
                </div>

            </div>
        )
    }
}
