import React, {useState} from "react";
import './todoItem.css'

export default function TodoItem({todo, whenTodoDelete, isDoneToggle}) {
    const [isTrue, setIsTrue] = useState(false);
    const onTodoDelete = () => {
        const answer = window.confirm('Are you sure?!');
        if (answer) {
            whenTodoDelete(todo.id);
        }
    }
    const onTodoClick = () => {
        const onMarkAsDone = isDoneToggle(todo.id);
        setIsTrue(!isTrue);
    }
    return (
        <>
            <div className={`todo_item ${isTrue ? 'done' : ''}`.trim()}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </div>
            <div className="todo_item_buttons">
                <button onClick={onTodoClick}>{isTrue ? 'Mark as in progress' : 'Mark as done'}</button>
                <button onClick={onTodoDelete}>Delete</button>
            </div>
        </>
    )
}