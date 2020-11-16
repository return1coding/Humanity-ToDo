import React, { Component } from 'react'

export default class NavLinkItem extends Component {
    render() {
        return (
            <div className='navLinkItemDiv'>
                <a href={this.props.link} target="_blank">{this.props.linkText}</a>
            </div>
        )
    }
}
