/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import UserItem from './UserItem';

export interface IUser {
  userId: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

const UserList = ({users}: {users: any}) => {
  const renderItem = ({item}: {item: IUser}) => {
    return <UserItem user={item} />;
  };

  return (
    <FlatList<IUser>
      style={{width: '100%'}}
      data={users}
      renderItem={renderItem}
    />
  );
};

export default UserList;
