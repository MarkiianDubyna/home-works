import React from "react";
import './App.css'
import './components/content.css'
import Routes from "./routes";
import Navigation from "./components/navigation";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes/>
        </div>
    );
}

export default App


// Link,
//     Redirect,
//     useParams,
//     useRouteMatch,
//     useHistory,


// function Posts() {
//   const [posts, setPosts] = useState([])
//   const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const json = await response.json();
//     setPosts(json);
//   }
//   useEffect(() => {
//     fetchData();
//   }, [])
//   return (
//       <div>
//
//         <ul>
//           {posts.map(post =>
//               <Link to={`/posts/${post.id}`}><li>{post.title} - {post.id}</li></Link>
//           )}
//         </ul>
//       </div>
//   );
// }


// function Home() {
//   return <h2>Home</h2>;
// }


// function PostDetails() {
//   const [post, setPost] = useState([]);
//   const match = useRouteMatch();
//   const {id} = useParams();
//   const history = useHistory();
//   const fetchData = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const json = await response.json();
//     setPost(json);
//   }
//   useEffect(() => {
//     fetchData();
//   }, [id])
//   return (
//       <div>
//         <h2>Post details</h2>
//         {post && <> <h3>{post.title}</h3> <p>{post.body}</p></>}
//
//         <button onClick={() => history.push(`/posts/${+id +1}`)}>Go to next post</button>
//       </div>
//   );
// }
//
// function Users() {
//   return <h2>Users</h2>;
// }


// <Router>
//   <div>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/posts">Posts</Link>
//         </li>
//       </ul>
//     </nav>
//
//     {/* A <Switch> looks through its children <Route>s and
//       renders the first one that matches the current URL. */}
//     <Switch>
//       <Route path="/" exact>
//         <Home />
//       </Route>
//       <Route path="/posts" exact>
//         <Posts />
//       </Route>
//       <Route path="/posts/:id">
//         <PostDetails />
//       </Route>
//     </Switch>
//   </div>
// </Router>
