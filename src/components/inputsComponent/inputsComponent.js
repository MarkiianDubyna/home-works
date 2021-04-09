import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {PHOTOS, ALBUMS, COMMENTS, POSTS, TODOS, USERS} from "../../constants/constants";
const endPoints = [
    POSTS,
    COMMENTS,
    ALBUMS,
    PHOTOS,
    TODOS,
    USERS,
]
export default function Inputs() {
    const [endpoint, setEndpoint] = useState([]);
    const [id, setId] = useState([]);
    const history = useHistory();
    const getList = () => {
        if (!endPoints.includes(endpoint) || endpoint === '') {
            return alert('Uncorrect endpoint, please, enter like "posts", "comments" e.t.c...')
        } else if (id === 0 && id > 100 ) {
            return alert('sorry, this "id" is uncorrect, please, enter id 1-100.')
        } else if (endpoint === 'users' && id > 10) {
            return alert('sorry, this user is not found.')
        }
        history.push(`/${endpoint}/${id}`);
    }
    return (
        <div className="inputs content">
            <input
                value={endpoint}
                onChange={({target: {value}}) => setEndpoint(value)}
                type="text" name="endpoint"
                placeholder="Please, enter endpoint =)"
            />
            <input
                value={id}
                onChange={({target: {value}}) => setId(value)}
                type="text"
                name="id"
                placeholder="Please, enter id for endpoint =)"
            />
            <button onClick={getList}>Enter</button>
        </div>
    )
}