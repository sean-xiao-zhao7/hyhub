import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabNavigator from "./src/navigators/MainBottomTabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <MainBottomTabNavigator />
        </NavigationContainer>
    );
}
