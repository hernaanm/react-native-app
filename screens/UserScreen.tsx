import React, {useEffect, useState} from 'react';
import api from '../api';
import Layout from '../components/Layout';
import UserList from '../components/UserList';

const Homescreen = () => {
  const [users, setUsers] = useState<any[]>([]);

  const loadUsers = async () => {
    const data = await api.getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Layout>
      <UserList users={users} />
    </Layout>
  );
};

export default Homescreen;

// headerRight: () => (
//     <TouchableOpacity>
//       <Text>New</Text>
//     </TouchableOpacity>
//   ),
