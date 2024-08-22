import 'react-native-gesture-handler';
import AppNavigator from '../app/navigation';
import {SafeAreaView, StyleSheet} from 'react-native';
function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppNavigator />
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
