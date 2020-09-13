
import React, { Component } from 'react';
import HeaderMainTitle from './HeaderMainTitle';
import NavLinks from './NavLinks'

export default class HeaderComponent extends Component {
    render() {
        return (
            <header className="header">
                <HeaderMainTitle/>
                <NavLinks/>
            </header>
        )
    }
}
