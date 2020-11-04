import React, { useState, useEffect } from 'react';
import ToDoListCard from './ToDoListCard';
const mongoose = require('mongoose');

var listOfToDos = [];

// fetch('https://justinevm.ddns.net/get-all-todos')
//     .then(response => response.json())
//     .then((data) => {
//         listOfToDos.push(data);
//     });

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
         const apiCall = await fetch('https://justinevm.ddns.net/get-all-todos');
         const todos = await apiCall.json();
         setTodos(todos.result);
         console.log(todos);
    }
    useEffect(() => {
        fetchTodos();
    }, [])
    return (
        <div className = "actualList">
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <ToDoListCard
                                title={(todo.title).toLowerCase()}
                                location={(todo.from).toLowerCase()}
                                time={todo.time}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;

// export default class ToDoList extends Component {

//     state = {
//         data: [],
//       };

//     constructor() {
//         super();
//     }

//     async componentDidMount() {
//         const response = await fetch(`https://justinevm.ddns.net/get-all-todos`);
//         const json = await response.json();
//         // console.log(json)
//         // this.setState({ data: json });
//     }

//     render() {
//         return (
//             // <div>hello</div>
//             <div className="actualList">
//                 hello
//                 {/* {this.state.data.result.map(function (d, idx) {
//                     return <ToDoListCard
//                         title={(d.title).toLowerCase()}
//                         location={(d.from).toLowerCase()}
//                         time={d.time}
//                     />
//                 })} */}
//             </div>

//         )
//     }
// }
