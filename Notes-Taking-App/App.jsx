import { StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <createNativeStackNavigator>

        </createNativeStackNavigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  
});