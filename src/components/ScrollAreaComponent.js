import React, { Component } from 'react';
import ToDoList from './ToDoList';
import FormInputArea from './FormInputArea';

export default class ScrollAreaComponent extends Component {
    render() {
        return (
            <div className="mainBodyBackground">
                <div className="mainBody">
                    <h1 className="theresAlwaysMore">There's always more to do...</h1>
                    <FormInputArea />
                    <ToDoList />
                </div>

            </div>
        )
    }
}
