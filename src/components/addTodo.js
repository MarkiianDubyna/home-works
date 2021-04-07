import {useState, useContext} from "react";
import {TodoContext} from "../context/context";

export default function AddTodo() {
    const [todoValues, setTodoValues] = useState({
        title: '',
        description: '',
        id: null,
    })
    const {whenTodoCreate} = useContext(TodoContext)
    const whenTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})
    const createTodo = () => {
        whenTodoCreate({...todoValues, id: Math.random()});
        setTodoValues({
            title: '',
            description: '',
            id: null,
        });
    }
    return (
        <div className="inputs content">
            <input value={todoValues.title} type="text" onChange={whenTodoChange} name="title"
                   placeholder="enter title"/>
            <br/>
            <br/>
            <input value={todoValues.description} type="text" onChange={whenTodoChange} name="description"
                   placeholder="enter description"/>
            <br/>
            <br/>
            <button onClick={createTodo}>Add todo</button>
        </div>
    )
}