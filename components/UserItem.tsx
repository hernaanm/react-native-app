import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IUser} from './UserList';

export const UserItem = ({user}: {user: IUser}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>ID: {user.userId}</Text>
      <Text style={styles.itemTitle}>email: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#ffffff',
  },
});

export default UserItem;
