import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import HeaderUser from '../../components/User/HeaderUser';
const logo = require('../../../asset/image/classroom_avatar.png');
function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderUser></HeaderUser>
      <Image style={styles.logo} source={logo} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 'auto',
    height: 300,
  },
});

export default Home;
