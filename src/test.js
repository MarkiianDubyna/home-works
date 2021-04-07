// import React, {createContext, useContext, useState} from "react";
//
// const TodoContext = createContext();
// const TodoContextProvider = ({children}) => {
//     const [todos, setTodos] = useState([]);
//     const onTodoCreate = (newTodo) => {
//         if (!newTodo || !newTodo.title || !newTodo.description) {
//             console.error('wrong arg for new todo, should be smth like {title: "...", description: "..."}')
//             return
//         }
//         setTodos([newTodo, ...todos])
//     }
//     return (
//         <TodoContext.Provider value={{
//             todos,
//             onTodoCreate
//         }}>
//             {children}
//         </TodoContext.Provider>
//     )
// }
// const TodoItem = ({todo, todos}) => {
//     const [isTrue, setIsTrue] = useState(false);
//     const deleteTodoItem = (todos) => {
//         console.log(todos);
//
//     }
//     return (
//         <div className={`todo_item ${isTrue ? 'done' : ''}`.trim()}>
//             <h4>{todo.title}</h4>
//             <p>{todo.description}</p>
//             <button onClick={() => setIsTrue(!isTrue)}>{`${isTrue ? 'Mark as in progres' : 'Mark as done'}`}</button>
//             <button onClick={() => deleteTodoItem(todos)}>Delete</button>
//         </div>
//     )
// }
// const TodosList = () => {
//     const {todos} = useContext(TodoContext);
//     console.log(todos, 'from list')
//     return (
//         <div className="todo_list">
//             {todos.map(el => <TodoItem key={el.title + el.description} todo={el} todos={todos}/>)}
//         </div>
//     )
// };
// const AddTodo = () => {
//     const [todoValues, setTodoValues] = useState({
//         title: '',
//         description: '',
//     })
//     const {onTodoCreate} = useContext(TodoContext);
//     const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})
//     const onCreate = () => {
//         // onTodoAdd (from context)
//         onTodoCreate(todoValues)
//         setTodoValues({
//             title: '',
//             description: '',
//         });
//     }
//     return (
//         <div>
//             <input value={todoValues.title} onChange={onTodoChange} type="text" name="title" placeholder="todo title"/>
//             <br/>
//             <br/>
//             <input value={todoValues.description} onChange={onTodoChange} type="text" name="description"
//                    placeholder="todo description"/>
//             <br/>
//             <button onClick={onCreate}>add todo</button>
//         </div>
//     )
// }
// const Header = () => {
//
//     return (
//         <header>
//             <Link to="/">List</Link>
//             <Link to="/create-todo">Add new todo</Link>
//         </header>
//     )
// }
//
// function App() {
//     return (
//         // 1 список todos, де ми можемо маркувати їх як виконані або видаляти
//         // 2 форма для створення нової todo
//         <TodoContextProvider>
//             <main>
//                 <Router>
//                     <Header/>
//                     <Switch>
//                         <Route path="/" exact>
//                             <TodosList/>
//                         </Route>
//                         <Route path="/create-todo">
//                             <AddTodo/>
//                         </Route>
//                     </Switch>
//                 </Router>
//             </main>
//         </TodoContextProvider>
//     );
// }
//
// export default App;
