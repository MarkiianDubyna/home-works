import {useContext} from 'react';
import {TodoContext} from "../context/context";
import TodoItem from "./todoItem";

export default function TodoList() {
    const {todos, whenTodoDelete, doneTodos, isDoneToggle} = useContext(TodoContext);
    return (
        <div className="todo_list content">
            <h2>Added todos:</h2>
            <hr/>
            <div className="todo_items">
                {todos.map(el => (
                    <TodoItem
                        key={el.title + el.description}
                        todo={el}
                        todos={todos}
                        whenTodoDelete={whenTodoDelete}
                        isDoneToggle={isDoneToggle}
                        doneTodos={doneTodos}
                    />
                ))}
            </div>
        </div>
    )
}