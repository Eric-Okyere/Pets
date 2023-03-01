import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PetMap from './PetMap';

export default function App() {
  return (
    <View style={styles.container}>
      <PetMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   top:60,
   marginHorizontal:10
  },
});
