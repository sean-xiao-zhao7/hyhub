import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyContentsScreen from "../../screens/mycontents-stack/MyContentsScreen";

const MyContentsTabStack = createNativeStackNavigator();

const MyContentsTabStackNavigator = () => (
    <MyContentsTabStack.Navigator>
        <MyContentsTabStack.Screen
            name="MyContentsScreen"
            component={MyContentsScreen}
        />
    </MyContentsTabStack.Navigator>
);

export default MyContentsTabStackNavigator;
