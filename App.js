import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider, DefaultTheme } from "react-native-paper";

import MainBottomTabNavigator from "./src/navigators/MainBottomTabNavigator";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
    },
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <MainBottomTabNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    );
}
