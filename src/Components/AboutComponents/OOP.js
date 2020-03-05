import React, { Component } from 'react'

export default class OOP extends Component {

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
                    {this.state.on && (<h1 className="AboutComponentsH1">Basics  about clases, objects and inheritance in PHP.</h1>)}
                    <button className="AboutComponentButton" onClick={this.toggle}> OOP </button>
                </div>

            </div>
        )
    }
}