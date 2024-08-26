import AppNavigator from '../app/navigation';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AuthProvider} from './context/authContext';

function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
