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
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 18,
                                fontWeight: "500",
                            }}
                        >
                            Login
                        </Text>
                        <MaterialCommunityIcons
                            name="login-variant"
                            size={28}
                            color={"#fff"}
                        />
                    </View>
                ),
            }}
        />
    </UserStackNavigator.Navigator>
);

export default UserStack;
