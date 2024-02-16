import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native-paper";

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
                marginTop: -40,
                borderTopWidth: 1,
                borderTopColor: colors.backgroundColorGrayLight,
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
                    tabBarLabel: (
                        <Text
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: 500,
                                color: colors.lighterBlack,
                            }}
                        >
                            Discover
                        </Text>
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
                            name="diamond"
                            color={color}
                            size={32}
                        />
                    ),
                    tabBarLabel: (
                        <Text
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                fontWeight: 500,
                                color: colors.lighterBlack,
                            }}
                        >
                            My Contents
                        </Text>
                    ),
                }}
            />
        </MainBottomTabNav.Navigator>
    );
}
