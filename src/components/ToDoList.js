import React, { Component } from 'react';
import ToDoListCard from './ToDoListCard';

export default class ToDoList extends Component {
    render() {
        return (
            <div className="actualList">
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>
                <ToDoListCard/>         
            </div>
        )
    }
}
