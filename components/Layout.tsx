import React from 'react';
import {StyleSheet, View} from 'react-native';

const Layout = ({children}: {children: any}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
});

export default Layout;
