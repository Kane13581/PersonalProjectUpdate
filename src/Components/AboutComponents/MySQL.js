import React, { Component } from 'react'

export default class MySQL extends Component {

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
                    {this.state.on && (<h1 className="AboutComponentsH1">How to create and update a database, perform CRUD operations on tables.</h1>)}
                    <button className="AboutComponentButton" onClick={this.toggle}> MySQL </button>
                </div>

            </div>
        )
    }
}