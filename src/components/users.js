export default function UserList (props) {
    return (
        <>
            {props.list.map(user => (
                <div key={user.id}>
                    <h3>{user.name} -- {user.username} -- {user.email}</h3>
                </div>
            ))}
        </>
    )
}