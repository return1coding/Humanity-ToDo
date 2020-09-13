import React, { Component } from 'react'

export default class ToDoListCard extends Component {
    render() {
        return (
            <div className="toDoCard">
                <div className="itemTitleArea">
                    <h2 className="itemTitle">{this.props.title}</h2>
                    <h3 className="itemSubtitle">submitted from {this.props.location}</h3>
                </div>
                <div className="submitTimeDate">{this.props.time}</div>
            </div>
        )
    }
}
