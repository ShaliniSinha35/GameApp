
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StackNavigator from './navigation/stacknavigator';
import AppNavigator from './navigation/AppNavigator';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import { AuthProvider } from './AuthContext';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StackNavigator></StackNavigator> */}
      <AuthProvider>    
          <AppNavigator></AppNavigator>
      </AuthProvider>

      {/* <RegisterScreen></RegisterScreen>  */}
      {/* <LoginScreen></LoginScreen> */}
      
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
