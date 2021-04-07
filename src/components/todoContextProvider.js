import {useState} from "react";
import {TodoContext} from "../context/context";

export default function TodoContextProvider({children}) {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);
    const whenTodoCreate = (newTodo) => {
        if (!newTodo || !newTodo.title || !newTodo.description) {
            console.error('this arguments of todo is uncorrect')
            return
        }
        setTodos([newTodo, ...todos]);
    }
    const whenTodoDelete = (todoId) => {
        setTodos(todos.filter(el => el.id !== todoId))
    }
    const isDoneToggle = (todoId) => {
        const isTodoMarkedAsDone = doneTodos.includes(todoId);
        if (isTodoMarkedAsDone) {
            return setDoneTodos(doneTodos.filter(id => id !== todoId))
        }
        setDoneTodos([...doneTodos, todoId])
    }
    return (
        <TodoContext.Provider value={{
            todos,
            doneTodos,
            whenTodoCreate,
            whenTodoDelete,
            isDoneToggle
        }}>
            {children}
        </TodoContext.Provider>
    )
}