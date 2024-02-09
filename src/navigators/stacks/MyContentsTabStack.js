import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <SafeAreaView style={{ flex: 1 }}>
            <MyContentsTopTabsNavigator.Navigator>
                <MyContentsTopTabsNavigator.Screen
                    name="UserContentsStack"
                    component={UserContentsStack}
                />
                <MyContentsTopTabsNavigator.Screen
                    name="ManageStack"
                    component={ManageStack}
                />
            </MyContentsTopTabsNavigator.Navigator>
        </SafeAreaView>
    );
};

export default MyContentsTopTabs;
