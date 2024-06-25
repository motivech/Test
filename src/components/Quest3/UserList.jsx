import React, {useEffect, useState} from 'react';

const UserList = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('unluck')
                }
                const data = await response.json();
                setLoading(false)
                setUsers(data);
            } catch (error) {
                setError(error)
            }
        }
        fetchUsers();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;