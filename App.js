import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabNavigator from "./src/MainBottomTabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <MainBottomTabNavigator />
        </NavigationContainer>
    );
}
