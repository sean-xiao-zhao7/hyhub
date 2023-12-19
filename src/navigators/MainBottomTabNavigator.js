import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DiscoveryTabStackNavigator from "./stacks/DiscoveryTabStack";
import MyContentsTabStackNavigator from "./stacks/MyContentsTabStack";
import noHeaderOptions from "./options/noHeader";

const MainBottomTabNav = createBottomTabNavigator();

export default function MainBottomTabNavigator() {
    return (
        <MainBottomTabNav.Navigator
            screenOptions={noHeaderOptions}
            sceneContainerStyle={{
                backgroundColor: "white",
            }}
        >
            <MainBottomTabNav.Screen
                name="DiscoveryTabStackNavigator"
                component={DiscoveryTabStackNavigator}
                options={{
                    headerMode: "screen",
                    title: "Discover",
                    cardStyle: {
                        backgroundColor: "white",
                    },
                }}
            />
            <MainBottomTabNav.Screen
                name="MyContentsTabStackNavigator"
                component={MyContentsTabStackNavigator}
                options={{
                    title: "Me",
                    backgroundColor: "white",
                }}
            />
        </MainBottomTabNav.Navigator>
    );
}
