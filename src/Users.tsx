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
      const res = await axios.get<ServerResponse>('https://reqres.in/api/users');
      console.log(res.data.data.data);
      //setUsers(res);
    }
    loadUsers();
  }, []);

  return (
    <div>users</div>
  );
}

export default Users;
