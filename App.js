import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

import MainBottomTabNavigator from "./src/navigators/MainBottomTabNavigator";

export default function App() {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <MainBottomTabNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    );
}
