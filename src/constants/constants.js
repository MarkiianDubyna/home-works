import PostList from "../components/posts";
import CommentList from "../components/comments";
import AlbumList from "../components/albums";
import PhotoList from "../components/photos";
import TodoList from "../components/todos";
import UserList from "../components/users";

export const POSTS = 'posts';
export const COMMENTS = 'comments';
export const ALBUMS = 'albums';
export const PHOTOS = 'photos';
export const TODOS = 'todos';
export const USERS = 'users';
export const TABS = [
    POSTS,
    COMMENTS,
    ALBUMS,
    PHOTOS,
    TODOS,
    USERS
];
export const Components = {
    [POSTS]: PostList,
    [COMMENTS]: CommentList,
    [ALBUMS]: AlbumList,
    [PHOTOS]: PhotoList,
    [TODOS]: TodoList,
    [USERS]: UserList,
};
export const urlBilder = (resource) => `https://jsonplaceholder.typicode.com/${resource}`;
