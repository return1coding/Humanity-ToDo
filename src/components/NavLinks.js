import React, { Component } from 'react'
import NavLinkItem from './NavLinkItem'

export default class NavLinks extends Component {
    render() {
        return (
            <div className="navLinksDiv">
                <NavLinkItem linkText={"about"}/>
                <NavLinkItem linkText={"github"}/>
                <NavLinkItem linkText={"dog"}/>
            </div>
            
        )
    }
}
