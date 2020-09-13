import React, { Component } from 'react'

export default class ScrollAreaComponent extends Component {
    render() {
        return (
            <div className="mainBodyBackground">
                <div className="mainBody">
                    <h1 className="theresAlwaysMore">There's always more to do...</h1>
                    <form className="form">
                        <input placeholder="what are we missing?" className="Input-text"></input>
                        <button type="submit" className="submitButton">+</button>
                    </form>

                </div>

            </div>
        )
    }
}
