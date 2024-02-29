import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
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
                title: "Account",
                headerRight: (props) => (
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="login"
                            size={30}
                            color={"#fff"}
                        />
                    </View>
                ),
            }}
        />
    </UserStackNavigator.Navigator>
);

export default UserStack;
