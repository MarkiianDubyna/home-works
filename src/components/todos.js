export default function TodoList (props) {
    return (
        <>
            {props.list.map(todo => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.completed.toString()}</p>
                </div>
            ))}
        </>
    )
}