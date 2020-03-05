import React, { Component } from 'react'

export default class HTML5 extends Component {

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
                    {this.state.on && (<h1 className="AboutComponentsH1">Learned how to build a User Interface.</h1>)}
                    <button className="AboutComponentButton" onClick={this.toggle}> CSS3 / HTML5 </button>
                </div>

            </div>
        )
    }
}
