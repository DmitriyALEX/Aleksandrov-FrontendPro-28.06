import React from 'react';
import styles from './Form.module.css';

const Contacts = () => {

    const [users, setUsers] = React.useState([]);
    const [show, setShow] = React.useState(false);

    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const url = 'https://jsonplaceholder.typicode.com/users';

    React.useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    function delItems(index) {
        setUsers(users.filter((_, usersIndex) => 
            usersIndex !== index
        ))
    };

   function addUser() {
        const lastId = users[users.length - 1].id + 1;
        setUsers(users => [...users, {
            id: lastId,
            name: name,
            username: surname,
            phone: phone
        }])
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        addUser();
        setName('');
        setSurname('');
        setPhone('');
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>/</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>  
                            <td>
                                <button onClick={() => delItems(i)}>del</button>
                            </td>  
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => setShow((show) => !show)}>Show Form</button> 
                {show && <div className={styles.form_container}>
                    <form onSubmit={handleSubmit}>
                    <label>
                        <p>Name</p>
                    <input type="text"
                        value={name}
                        onChange={((e)=> setName(e.target.value))}
                    />
                    </label>
                    <label>
                        <p>SurName</p>
                        <input type="text"
                        value={surname}
                        onChange={((e)=> setSurname(e.target.value))}
                        />
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input type="number"
                        value={phone}
                        onChange={((e)=> setPhone(e.target.value))}
                        />
                    </label>
                    <div>
                        <button 
                            type="submit"
                            className={styles.submit_btn}
                        >Save
                        </button>
                        <button onClick={() => setShow((show) => !show)}>
                        close
                        </button>
                    </div>
                    </form>
                </div>
                }
            </div>  
        </div>    
    )
}

export default Contacts;
