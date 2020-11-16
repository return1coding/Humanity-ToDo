import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class ToDoListCard extends Component {
    render() {
        return (
            <div className="toDoCard">
                <div className="itemTitleArea">
                    <h2 className="itemTitle">{this.props.title}</h2>
                    <h3 className="itemSubtitle">submitted from {this.props.location}</h3>
                </div>
                <CopyToClipboard text={this.props.id}>
                <div className="submitTimeDate">{this.props.time}</div>
                </CopyToClipboard>
            </div>
        )
    }
}
