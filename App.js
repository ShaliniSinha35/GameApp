
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StackNavigator from './navigation/stacknavigator';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StackNavigator></StackNavigator> */}
      <AppNavigator></AppNavigator>
      <StatusBar
        backgroundColor='white'
        barStyle={"dark-content"}
        translucent={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
