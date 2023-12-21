import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider, DefaultTheme } from "react-native-paper";

import MainBottomTabNavigator from "./src/navigators/MainBottomTabNavigator";
import colors from "./src/styles/colors";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.mainColor,
        secondary: colors.secondColor,
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
