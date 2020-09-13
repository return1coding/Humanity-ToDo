import React, { Component } from 'react';
import ToDoListCard from './ToDoListCard';
const mongoose = require('mongoose');

// //connect to MongoDB
// const dbURI = 'mongodb+srv://humanitytodo:Jostono94mongodb@cluster0.ec2ig.gcp.mongodb.net/humanity-todo?retryWrites=true&w=majority';
// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
//         .then((result) => console.log("connected to db"))
//         .catch((err) => console.log(err));
export default class ToDoList extends Component {
    render() {
        return (
            <div className="actualList">
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
                <ToDoListCard title="hellothere" location="Malaysia" time="Dec 32, 2020" />
            </div>
        )
    }
}
