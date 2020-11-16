import React, { Component } from 'react';
import ToDoList from './ToDoList';
import FormInputArea from './FormInputArea';
import ToDoContextProvider from '../contexts/toDoContext'

export default class ScrollAreaComponent extends Component {
    render() {
        return (
            <div className="mainBodyBackground">
                <div className="mainBody">
                    <h1 className="theresAlwaysMore">There's always more to do...</h1>
                    <ToDoContextProvider>
                        <FormInputArea />
                        <ToDoList />
                    </ToDoContextProvider>
                </div>

            </div>
        )
    }
}
