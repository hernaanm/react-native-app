/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import api from '../api';
import Layout from '../components/Layout';
import {RefreshControl, FlatList} from 'react-native';
import UserItem from '../components/UserItem';

const Homescreen = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadUsers = async () => {
    const data = await api.getUsers();
    setUsers(data);
  };

  const renderUser = ({item}: {item: IUser}) => {
    return <UserItem user={item} />;
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadUsers();
    setRefreshing(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Layout>
      <FlatList<IUser>
        style={{width: '100%'}}
        data={users}
        renderItem={renderUser}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Layout>
  );
};

export interface IUser {
  userId: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

export default Homescreen;

// headerRight: () => (
//     <TouchableOpacity>
//       <Text>New</Text>
//     </TouchableOpacity>
//   ),
