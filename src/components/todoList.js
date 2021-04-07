import {useContext} from 'react';
import TodoContext from "../context/todoContextProvider";
export default function TodoList () {
    const {todos} = useContext(TodoContext);
    return (
        <div className="todo_list content">
            <h2>Added todos:</h2>
            {todos}
        </div>
    )
}