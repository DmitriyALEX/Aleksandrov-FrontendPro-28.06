import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = React.useState([])

    const UrlUsers = 'https://jsonplaceholder.typicode.com/users'
    
    React.useEffect(() => {
        fetch(UrlUsers)
        .then(res => res.json()) 
        .then(data => setUsers(data))
    }, []) 

    return (
        <div>
            <div>
                {users.map((user, index) => (
                    <div key={index}>
                        <p>{user.name}</p>
                        <Link to={`/albums/userId=${user.id}`}>
                            <button>Album</button>
                        </Link>
                    </div>
                ))
                }
            </div>
        </div> 
    )
}

export default Users
