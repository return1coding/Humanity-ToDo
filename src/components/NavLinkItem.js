import React, { Component } from 'react'

export default class NavLinkItem extends Component {
    render() {
        return (
            <div className='navLinkItemDiv'>
                <a href="https://www.w3schools.com">{this.props.linkText}</a>
            </div>
        )
    }
}
