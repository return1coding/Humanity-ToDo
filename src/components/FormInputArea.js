import React, { Component } from 'react'

export default class FormInputArea extends Component {
    render() {
        return (
            <form className="form">
                <input placeholder="what are we missing?" className="Input-text"></input>
                <button type="submit" className="submitButton">+</button>
            </form>
        )
    }
}
