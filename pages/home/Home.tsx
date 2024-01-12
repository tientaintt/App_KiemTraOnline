import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}> Nguyễn Tiến Tài - 20110563</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Home;
