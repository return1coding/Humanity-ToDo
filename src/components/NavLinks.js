import React, { Component } from 'react'
import NavLinkItem from './NavLinkItem'

export default class NavLinks extends Component {
    render() {
        return (
            <div className="navLinksDiv">
                <NavLinkItem linkText={"about"} link={"https://github.com/return1coding/Humanity-ToDo"}/>
                <NavLinkItem linkText={"github"} link={"https://github.com/return1coding/Humanity-ToDo"}/>
                {/* <NavLinkItem linkText={"dog"} link={"https://github.com/return1coding/Humanity-ToDo"}/> */}
            </div>
            
        )
    }
}
