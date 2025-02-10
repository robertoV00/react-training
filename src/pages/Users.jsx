import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function Users() {
    const {username} = useParams(); //destructored username from the useParams hook
    console.log(username);


    return (
        <div>{username}</div>
    )
}

export default Users;