import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainBottomTabNavigator from "./src/navigators/MainBottomTabNavigator";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainBottomTabNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
