import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../styles/colors";
import { Text } from "react-native-paper";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MyContentsScreen from "../../screens/mycontents-stack/MyContentsScreen";
import AddContentScreen from "../../screens/mycontents-stack/AddContentScreen";
import ManageContentScreen from "../../screens/mycontents-stack/ManageContentScreen";
import UserContentsScreen from "../../screens/mycontents-stack/UserContentsScreen";
import noHeaderOptions from "../options/noHeader";

const ManageContentsStackNavigator = createNativeStackNavigator();
const UserContentsStackNavigator = createNativeStackNavigator();
const MyContentsTopTabsNavigator = createMaterialTopTabNavigator();

const ManageStack = () => (
    <ManageContentsStackNavigator.Navigator screenOptions={noHeaderOptions}>
        <ManageContentsStackNavigator.Screen
            name="MyContentsScreen"
            component={MyContentsScreen}
        />
        <ManageContentsStackNavigator.Screen
            name="ManageContentScreen"
            component={ManageContentScreen}
        />
        <ManageContentsStackNavigator.Screen
            name="AddContentScreen"
            component={AddContentScreen}
        />
    </ManageContentsStackNavigator.Navigator>
);

const UserContentsStack = () => (
    <UserContentsStackNavigator.Navigator screenOptions={noHeaderOptions}>
        <UserContentsStackNavigator.Screen
            name="UserContentsScreen"
            component={UserContentsScreen}
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
                                name="bookmark-multiple-outline"
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
                                name="newspaper-variant-outline"
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
