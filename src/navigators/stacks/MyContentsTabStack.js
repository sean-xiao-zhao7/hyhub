import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ManageContentsScreen from "../../screens/mycontents-stack/ManageContentsScreen";
import AddContentScreen from "../../screens/mycontents-stack/AddContentScreen";
import ManageSingleContentScreen from "../../screens/mycontents-stack/ManageSingleContentScreen";
import UserContentsScreen from "../../screens/mycontents-stack/UserContentsScreen";
import ContentDetailsScreen from "../../screens/discovery-stack/ContentDetailsScreen";

import noHeaderOptions from "../options/headerOptions";
import colors from "../../styles/colors";

const ManageContentsStackNavigator = createNativeStackNavigator();
const UserContentsStackNavigator = createNativeStackNavigator();
const MyContentsTopTabsNavigator = createMaterialTopTabNavigator();

const ManageStack = () => (
    <ManageContentsStackNavigator.Navigator screenOptions={noHeaderOptions}>
        <ManageContentsStackNavigator.Screen
            name="ManageContentsScreen"
            component={ManageContentsScreen}
        />
        <ManageContentsStackNavigator.Screen
            name="ManageSingleContentScreen"
            component={ManageSingleContentScreen}
        />
        <ManageContentsStackNavigator.Screen
            name="AddContentScreen"
            component={AddContentScreen}
        />
    </ManageContentsStackNavigator.Navigator>
);

const UserContentsStack = () => (
    <UserContentsStackNavigator.Navigator>
        <UserContentsStackNavigator.Screen
            name="UserContentsScreen"
            component={UserContentsScreen}
            options={noHeaderOptions}
        />
        <UserContentsStackNavigator.Screen
            name="ContentDetailsScreen"
            component={ContentDetailsScreen}
            options={{
                headerShown: true,
                title: "Details",
                headerTitleStyle: {
                    fontSize: 16,
                    color: "white",
                    fontWeight: "600",
                },
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: colors.mainColor,
                },
            }}
        />
    </UserContentsStackNavigator.Navigator>
);

const MyContentsTopTabs = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.mainColor }}>
            <MyContentsTopTabsNavigator.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: colors.mainColor,
                    },
                    tabBarLabelStyle: {
                        color: "white",
                        fontWeight: "500",
                        fontSize: 16,
                        textTransform: "capitalize",
                    },
                    tabBarActiveTintColor: {
                        color: colors.mainColorFont,
                    },
                    tabBarInactiveTintColor: {
                        color: "white",
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "yellow",
                    },
                    tabBarShowIcon: true,
                    tabBarItemStyle: {
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    tabBarContentContainerStyle: {
                        padding: 0,
                        margin: 0,
                    },
                }}
            >
                <MyContentsTopTabsNavigator.Screen
                    name="UserContentsStack"
                    component={UserContentsStack}
                    options={{
                        tabBarLabel: "Saved",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons
                                name="diamond"
                                size={20}
                                color={"white"}
                            />
                        ),
                    }}
                />
                <MyContentsTopTabsNavigator.Screen
                    name="ManageStack"
                    component={ManageStack}
                    options={{
                        tabBarLabel: "Manage",
                        tabBarIcon: () => (
                            <MaterialCommunityIcons
                                name="star-circle"
                                size={20}
                                color={"white"}
                            />
                        ),
                    }}
                />
            </MyContentsTopTabsNavigator.Navigator>
        </SafeAreaView>
    );
};

export default MyContentsTopTabs;
