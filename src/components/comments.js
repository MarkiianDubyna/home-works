export default function CommentList (props) {
    return (
        <>
            {props.list.map(comment => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    )
}