import React from 'react';
import {Route, Switch} from "react-router-dom";
import Posts from "./components/posts";
import Comments from "./components/comments";
import Albums from "./components/albums";
import Photos from "./components/photos";
import Todos from "./components/todos";
import Users from "./components/users";
import PostDetails from "./components/postDetails";
import CommentDetails from "./components/commentDetails";
import AlbumDetails from "./components/albumDetails";
import PhotoDetails from "./components/photoDetails";
import TodoDetails from "./components/todoDetails";
import UserDetails from "./components/userDetails";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <h2 className="content"> This is Home page. Please select some frome left </h2>
            </Route>
            <Route path='/posts' exact component={Posts}/>
            <Route path='/posts/:id' exact component={PostDetails}/>
            <Route path='/comments' exact component={Comments}/>
            <Route path='/comments/:id' exact component={CommentDetails}/>
            <Route path='/albums' exact component={Albums}/>
            <Route path='/albums/:id' exact component={AlbumDetails}/>
            <Route path='/photos' exact component={Photos}/>
            <Route path='/photos/:id' exact component={PhotoDetails}/>
            <Route path='/todos' exact component={Todos}/>
            <Route path='/todos/:id' exact component={TodoDetails}/>
            <Route path='/users' exact component={Users}/>
            <Route path='/users/:id' exact component={UserDetails}/>
        </Switch>
    );
};

export default Routes;
