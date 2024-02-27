import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native-paper";

import DiscoveryTabStackNavigator from "./stacks/DiscoveryTabStack";
import MyContentsTabStackNavigator from "./stacks/MyContentsTabStack";
import noHeaderOptions from "./options/headerOptions";
import colors from "../styles/colors";

const MainBottomTabNav = createBottomTabNavigator();

export default function MainBottomTabNavigator() {
    return (
        <MainBottomTabNav.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 90,
                    paddingTop: 10,
                    position: "absolute",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "500",
                },
                tabBarActiveTintColor: colors.mainColor,
                tabBarInactiveTintColor: colors.darkerGray,
            }}
        >
            <MainBottomTabNav.Screen
                name="DiscoveryTabStackNavigator"
                component={DiscoveryTabStackNavigator}
                options={{
                    title: "Discover",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="fire"
                            color={color}
                            size={32}
                        />
                    ),
                }}
            />
            <MainBottomTabNav.Screen
                name="MyContentsTabStackNavigator"
                component={MyContentsTabStackNavigator}
                options={{
                    title: "Gems",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="diamond"
                            color={color}
                            size={32}
                        />
                    ),
                }}
            />
        </MainBottomTabNav.Navigator>
    );
}
