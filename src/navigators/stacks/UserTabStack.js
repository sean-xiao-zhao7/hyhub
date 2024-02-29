import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserHomeScreen from "../../screens/user-stack/UserHomeScreen";
import { withHeaderOptions } from "../options/headerOptions";

const UserStackNavigator = createNativeStackNavigator();

const UserStack = () => (
    <UserStackNavigator.Navigator screenOptions={withHeaderOptions}>
        <UserStackNavigator.Screen
            name="UserHomeScreen"
            component={UserHomeScreen}
        />
    </UserStackNavigator.Navigator>
);

export default UserStack;
