import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyContentsScreen from "../../screens/mycontents-stack/MyContentsScreen";
import noHeaderOptions from "../options/noHeader";

const MyContentsTabStack = createNativeStackNavigator();

const MyContentsTabStackNavigator = () => (
    <MyContentsTabStack.Navigator screenOptions={noHeaderOptions}>
        <MyContentsTabStack.Screen
            name="MyContentsScreen"
            component={MyContentsScreen}
        />
    </MyContentsTabStack.Navigator>
);

export default MyContentsTabStackNavigator;
