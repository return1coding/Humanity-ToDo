import React, { Component } from 'react'

export default class ToDoListCard extends Component {
    render() {
        return (
            <div className="toDoCard">
                <div className="itemTitleArea">
                    <h2 className="itemTitle">Hello</h2>
                    <h3 className="itemSubtitle">Submitted from Malaysia</h3>
                </div>
                <div className="submitTimeDate">Dec 32, 2020</div>
            </div>
        )
    }
}
