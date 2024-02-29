import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserHomeScreen from "../../screens/user-stack/UserHomeScreen";

const UserStackNavigator = createNativeStackNavigator();

const UserStack = () => (
    <UserStackNavigator.Navigator>
        <UserStackNavigator.Screen
            name="UserHomeScreen"
            component={UserHomeScreen}
        />
    </UserStackNavigator.Navigator>
);

export default UserStack;
