import {useEffect, useState} from 'react';
import axios from 'axios';


function Home() {

    const [users, setUsers] = useState([])

    async function fetchData() {
        // fetching data from api
        
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {/* //map through the data */}
            {users.map((user) => (
                <div key={user.id} style={{ border: "1px solid red", margin: "8px 0" }}>
                    <div>{user?.name}</div>
                    <div>{user?.username}</div>
                    <div>{user?.id}</div>
                </div>
            ))}
        </div>
    )
}

export default Home;