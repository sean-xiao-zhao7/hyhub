import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

import DiscoveryScreen from "../../screens/discovery-stack/DiscoveryScreen";
import ContentDetailsScreen from "../../screens/discovery-stack/ContentDetailsScreen";
import noHeaderOptions from "../options/noHeader";
import colors from "../../styles/colors";

const DiscoveryTabStack = createNativeStackNavigator();

const DiscoveryTabStackNavigator = () => {
    return (
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
                    headerTitle: () => (
                        <Text
                            style={{
                                fontSize: 18,
                                color: "white",
                                fontWeight: 500,
                            }}
                        >
                            Details
                        </Text>
                    ),
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: colors.mainColor,
                    },
                }}
            />
        </DiscoveryTabStack.Navigator>
    );
};

export default DiscoveryTabStackNavigator;
