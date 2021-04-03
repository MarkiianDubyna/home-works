export default function PostList (props) {
    return (
     <>
         {props.list.map(post => (
             <div key={post.id}>
                 <h3>{post.title}</h3>
                 <p>{post.body}</p>
             </div>
         ))}
     </>
    )
}