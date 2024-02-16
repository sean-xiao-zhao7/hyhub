import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import DiscoveryScreen from "../../screens/discovery-stack/DiscoveryScreen";
import ContentDetailsScreen from "../../screens/discovery-stack/ContentDetailsScreen";
import noHeaderOptions from "../options/noHeader";
import colors from "../../styles/colors";

const DiscoveryTabStack = createNativeStackNavigator();

const DiscoveryTabStackNavigator = () => (
    <DiscoveryTabStack.Navigator
        screenOptions={{
            ...noHeaderOptions,
        }}
    >
        <DiscoveryTabStack.Screen
            name="DiscoveryScreen"
            component={DiscoveryScreen}
        />
        <DiscoveryTabStack.Screen
            name="ContentDetailsScreen"
            component={ContentDetailsScreen}
            options={{
                headerShown: true,
                title: "Details",
                headerTitleStyle: {
                    color: "white",
                    fontSize: 18,
                    fontWeight: "normal",
                },
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: colors.mainColor,
                },
                headerRight: () => {
                    return (
                        <MaterialCommunityIcons
                            name="heart-outline"
                            size={30}
                            color={"#fff"}
                        />
                    );
                },
            }}
        />
        {/* <rootStack.Screen
            name="Auth"
            component={AuthScreen}
            options={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white",
                    paddingHorizontal: 20,
                },
            }}
        /> */}
    </DiscoveryTabStack.Navigator>
);

export default DiscoveryTabStackNavigator;
