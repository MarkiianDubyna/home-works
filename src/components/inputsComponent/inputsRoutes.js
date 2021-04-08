import React from "react";
import {Switch, Route} from "react-router-dom";
import Posts from "../jsonComponents/posts";
import Comments from "../jsonComponents/comments";
import Albums from "../jsonComponents/albums";
import Photos from "../jsonComponents/photos";
import Todos from "../jsonComponents/todos";
import Users from "../jsonComponents/users";
import AlbumDetails from "../jsonComponents/albumDetails";
import CommentDetails from "../jsonComponents/commentDetails";
import PostDetails from "../jsonComponents/postDetails";
import PhotoDetails from "../jsonComponents/photoDetails";
import TodoDetails from "../jsonComponents/todoDetails";
import UserDetails from "../jsonComponents/userDetails";
const InputsRoutes = () => {
    return (
    <Switch>
        <Route path={'/posts'} exact component={Posts}/>
        <Route path={'/posts/:id'} exact component={PostDetails}/>
        <Route path={'/comments'} exact component={Comments}/>
        <Route path={'/comments/:id'} exact component={CommentDetails}/>
        <Route path={'/albums'} exact component={Albums}/>
        <Route path={'/albums/:id'} exact component={AlbumDetails}/>
        <Route path={`/photos`} exact component={Photos}/>
        <Route path={`/photos/:id`} exact component={PhotoDetails}/>
        <Route path={`/todos`} exact component={Todos}/>
        <Route path={`/todos/:id`} exact component={TodoDetails}/>
        <Route path={`/users`} exact component={Users}/>
        <Route path={`/users/:id`} exact component={UserDetails}/>
    </Switch>
    )
}
export default InputsRoutes