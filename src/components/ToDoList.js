import React, { Component } from 'react';
import ToDoListCard from './ToDoListCard';
const mongoose = require('mongoose');

// var listOfToDos = [];

// fetch('https://justinevm.ddns.net/get-all-todos')
//     .then(response => response.json())
//     .then((data) => {
//         listOfToDos.push(data);
//     });




export default class ToDoList extends Component {

    constructor() {
        super();
        this.state = { data: [] };
    }

    async componentDidMount() {
        const response = await fetch(`https://justinevm.ddns.net/get-all-todos`);
        console.log(response);
        const json = await response.json();
        console.log(json);
        this.setState({ data: json });
    }

    render() {
        return (
            <div className="actualList">
                {this.state.data.map(function (d, idx) {
                    return <ToDoListCard
                        title={(d.title).toLowerCase()}
                        location={(d.from).toLowerCase()}
                        time={d.time}
                    />
                })}
            </div>
        )
    }
}
