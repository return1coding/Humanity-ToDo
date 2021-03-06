import React, { useContext } from 'react'
import { ToDoContext } from '../contexts/toDoContext';


const FormInputArea = () => {

    const { fetchTodos } = useContext(ToDoContext);

    let textInput = React.createRef();
    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(e);
        var titleObject = {
            title: textInput.current.value
        }
        console.log(textInput.current.value);
        await fetch('https://justinevm.ddns.net/submit-todo', {
            method: 'POST',
            body: JSON.stringify(titleObject),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(() => {
            fetchTodos();
            textInput.current.value = '';
        })
    }

    return (
        <form className="form" onSubmit={(e) => { onSubmit(e); }}>
            <input placeholder="what are we missing?" className="Input-text" name="todo" ref={textInput}></input>
            <button type="submit" className="submitButton" >+</button>
            {/* onClick={(e) => { onSubmit(e); }} */}
        </form>
    )
}

export default FormInputArea;
