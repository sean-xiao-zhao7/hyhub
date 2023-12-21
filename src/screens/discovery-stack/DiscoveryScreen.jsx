import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

import { useSelector } from "react-redux";

const DiscoveryScreen = () => {
    const contents = useSelector((state) => state.myContents.contents);

    return (
        <SafeAreaView>
            <ScrollView style={mainScreenStyle}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <MaterialCommunityIcons
                        name="fire"
                        size={32}
                        color={colors.mainColor}
                    />
                    <Text style={{ fontSize: 20 }}>
                        Discover what's around you.
                    </Text>
                </View>
                {contents.map((content) => {
                    return (
                        <View>
                            <Text>{content.title}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

export default DiscoveryScreen;
