import React, { Component } from 'react'

export default class MVC extends Component {

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
                    {this.state.on && (<h1 className="AboutComponentsH1">Built a blog with administrative featurea creating a custom MVC framework from scratch.</h1>)}
                    <button className="AboutComponentButton" onClick={this.toggle}> MVC </button>
                </div>

            </div>
        )
    }
}