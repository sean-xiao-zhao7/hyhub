import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider, useDispatch } from "react-redux";

import MainBottomTabNavigator from "./src/navigators/MainBottomTabNavigator";
import colors from "./src/styles/colors";
import store from "./src/redux/store";

import { loadContentsAction } from "./src/redux/slices/allContentsSlice";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.mainColor,
        secondary: colors.secondColor,
        surfaceVariant: "transparent",
        secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
    },
};

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <MainBottomTabNavigator />
                    </NavigationContainer>
                </SafeAreaProvider>
            </PaperProvider>
        </Provider>
    );
}
