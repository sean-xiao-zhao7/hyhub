import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import DiscoveryTabStackNavigator from "./stacks/DiscoveryTabStack";
import MyContentsTabStackNavigator from "./stacks/MyContentsTabStack";
import noHeaderOptions from "./options/noHeader";

const MainBottomTabNav = createMaterialBottomTabNavigator();

export default function MainBottomTabNavigator() {
    return (
        <MainBottomTabNav.Navigator screenOptions={noHeaderOptions}>
            <MainBottomTabNav.Screen
                name="DiscoveryTabStackNavigator"
                component={DiscoveryTabStackNavigator}
                options={{
                    title: "Discover",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="fire"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <MainBottomTabNav.Screen
                name="MyContentsTabStackNavigator"
                component={MyContentsTabStackNavigator}
                options={{
                    title: "My Contents",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="heart"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </MainBottomTabNav.Navigator>
    );
}
