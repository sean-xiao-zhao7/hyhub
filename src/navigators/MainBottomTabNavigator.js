import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import DiscoveryTabStackNavigator from "./stacks/DiscoveryTabStack";
import MyContentsTabStackNavigator from "./stacks/MyContentsTabStack";
import noHeaderOptions from "./options/noHeader";
import colors from "../styles/colors";

const MainBottomTabNav = createMaterialBottomTabNavigator();

export default function MainBottomTabNavigator() {
    return (
        <MainBottomTabNav.Navigator
            screenOptions={noHeaderOptions}
            activeColor={colors.mainColor}
            inactiveColor={colors.secondColor}
            barStyle={{
                backgroundColor: colors.backgroundColor,
                shadowColor: colors.borderColor,
                shadowOffset: { width: 1, height: 1 },
                shadowRadius: 5,
                shadowOpacity: 1,
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
                    title: "My Contents",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="diamond-stone"
                            color={color}
                            size={32}
                        />
                    ),
                }}
            />
        </MainBottomTabNav.Navigator>
    );
}
