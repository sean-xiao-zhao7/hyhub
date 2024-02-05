import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyContentsScreen from "../../screens/mycontents-stack/MyContentsScreen";
import AddContentScreen from "../../screens/mycontents-stack/AddContentScreen";
import ManageContentScreen from "../../screens/mycontents-stack/ManageContentScreen";

import noHeaderOptions from "../options/noHeader";

const MyContentsTabStack = createNativeStackNavigator();

const MyContentsTabStackNavigator = () => (
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

export default MyContentsTabStackNavigator;
