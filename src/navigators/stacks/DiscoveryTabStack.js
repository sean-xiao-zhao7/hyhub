import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import DiscoveryScreen from "../../screens/discovery-stack/DiscoveryScreen";
import ContentDetailsScreen from "../../screens/discovery-stack/ContentDetailsScreen";
import colors from "../../styles/colors";

const DiscoveryTabStack = createNativeStackNavigator();

const DiscoveryTabStackNavigator = () => {
    return (
        <DiscoveryTabStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: colors.mainColor },
                headerTitleStyle: {
                    color: "white",
                    fontSize: 20,
                    fontWeight: "500",
                },
            }}
        >
            <DiscoveryTabStack.Screen
                name="DiscoveryScreen"
                component={DiscoveryScreen}
                options={{
                    title: "Discover",
                    headerLeft: (props) => (
                        <View
                            style={{
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="filter-variant"
                                size={32}
                                color={"#fff"}
                            />
                        </View>
                    ),
                    headerRight: (props) => (
                        <View
                            style={{
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="magnify"
                                size={32}
                                color={"#fff"}
                            />
                        </View>
                    ),
                }}
            />
            <DiscoveryTabStack.Screen
                name="ContentDetailsScreen"
                component={ContentDetailsScreen}
                options={{
                    headerShown: true,
                    title: "Details",
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: colors.mainColor,
                    },
                    headerBackTitleVisible: false,
                }}
            />
        </DiscoveryTabStack.Navigator>
    );
};

export default DiscoveryTabStackNavigator;
