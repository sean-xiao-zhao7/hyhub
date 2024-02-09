import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MyContentsScreen from "../../screens/mycontents-stack/MyContentsScreen";
import AddContentScreen from "../../screens/mycontents-stack/AddContentScreen";
import ManageContentScreen from "../../screens/mycontents-stack/ManageContentScreen";

import noHeaderOptions from "../options/noHeader";

const MyContentsTabStack = createNativeStackNavigator();
const MyContentsTopTabsNavigator = createMaterialTopTabNavigator();

const ManageStackNavigator = () => (
    <MyContentsTabStack.Navigator screenOptions={noHeaderOptions}>
        <MyContentsTabStack.Screen
            name="MyContentsScreen"
            component={MyContentsScreen}
        />
        <MyContentsTabStack.Screen
            name="ManageContentScreen"
            component={ManageContentScreen}
        />
        <MyContentsTabStack.Screen
            name="AddContentScreen"
            component={AddContentScreen}
        />
    </MyContentsTabStack.Navigator>
);

const MyContentsTopTabs = () => {
    return (
        <MyContentsTopTabsNavigator.Navigator>
            <MyContentsTopTabsNavigator.Screen
                name="ManageStackNavigator"
                component={ManageStackNavigator}
            />
        </MyContentsTopTabsNavigator.Navigator>
    );
};

export default MyContentsTopTabs;
