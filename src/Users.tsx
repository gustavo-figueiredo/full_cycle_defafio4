import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ServerResponse {
  data: ServerResponseData
}

interface ServerResponseData {
  data: User[]
}

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string

}


function Users() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const res: ServerResponse = await axios.get('https://reqres.in/api/users');
      const responseData = res.data as ServerResponseData;
      setUsers(responseData.data);
    }
    loadUsers();
  }, []);

  return (
    <div>
      <table>

        {users.map(user => (
          <tr key={user.id}>
            <td><img src={user.avatar} /></td>
            <td>
              <tr>
                <td>{user.first_name} {user.last_name}</td>
              </tr>
              <tr>
                <td>{user.email}</td>
              </tr>
            </td>
          </tr>
        ))}

      </table>

    </div>
  )
}

export default Users;
