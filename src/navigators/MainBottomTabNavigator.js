import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DiscoveryTabStackNavigator from "./stacks/DiscoveryTabStack";
import MyContentsTabStackNavigator from "./stacks/MyContentsTabStack";
import noHeaderOptions from "./options/noHeader";

const MainBottomTabNav = createBottomTabNavigator();

export default function MainBottomTabNavigator() {
    return (
        <MainBottomTabNav.Navigator screenOptions={noHeaderOptions}>
            <MainBottomTabNav.Screen
                name="DiscoveryTabStackNavigator"
                component={DiscoveryTabStackNavigator}
                options={{
                    title: "Discover",
                }}
            />
            <MainBottomTabNav.Screen
                name="MyContentsTabStackNavigator"
                component={MyContentsTabStackNavigator}
                options={{
                    title: "Me",
                }}
            />
        </MainBottomTabNav.Navigator>
    );
}
