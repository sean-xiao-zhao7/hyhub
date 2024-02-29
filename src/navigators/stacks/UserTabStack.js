import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import UserHomeScreen from "../../screens/user-stack/UserHomeScreen";
import { withHeaderOptions } from "../options/headerOptions";

const UserStackNavigator = createNativeStackNavigator();

const UserStack = () => (
    <UserStackNavigator.Navigator screenOptions={withHeaderOptions}>
        <UserStackNavigator.Screen
            name="UserHomeScreen"
            component={UserHomeScreen}
            options={{
                headerTitleAlign: "left",
                title: "Profile",
                headerLeft: (props) => (
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name="menu"
                            size={30}
                            color={"#fff"}
                        />
                    </TouchableOpacity>
                ),
                headerRight: (props) => (
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name="login-variant"
                            size={30}
                            color={"#fff"}
                        />
                    </TouchableOpacity>
                ),
            }}
        />
    </UserStackNavigator.Navigator>
);

export default UserStack;
