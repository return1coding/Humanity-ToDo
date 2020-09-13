import React, { Component } from 'react'

export default class FormInputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        const form = {
            title: this.state.todo,
        }
        await fetch('https://justinevm.ddns.net/submit-todo', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <form className="form">
                <input placeholder="what are we missing?" className="Input-text" name="todo" onChange={e => this.handleChange(e)}></input>
                <button type="button" className="submitButton" onClick={(e) => { this.onSubmit(e); }}>+</button>
            </form>
        )
    }
}
