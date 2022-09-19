import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DictionaryState from "./context/DictionaryState";
import Details from "./screens/Details";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <DictionaryState>
       <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </DictionaryState>
  );
}
