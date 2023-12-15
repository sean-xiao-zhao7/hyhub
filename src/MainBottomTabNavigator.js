import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainBottomTabNav = createBottomTabNavigator();

export default function MainBottomTabNavigator() {
    return (
        <MainBottomTabNav.Navigator screenOptions={{ headerShown: false }}>
            <MainBottomTabNav.Screen name="Home" component={HomeStackScreen} />
            <MainBottomTabNav.Screen
                name="Settings"
                component={SettingsStackScreen}
            />
        </MainBottomTabNav.Navigator>
    );
}
