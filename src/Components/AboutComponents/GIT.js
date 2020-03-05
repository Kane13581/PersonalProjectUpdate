import React, { Component } from 'react'

export default class GIT extends Component {

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
                    {this.state.on && (<h1 className="AboutComponentsH1">Learned the principles and basic commands.</h1>)}
                    <button className="AboutComponentButton" onClick={this.toggle}> GIT </button>
                </div>

            </div>
        )
    }
}