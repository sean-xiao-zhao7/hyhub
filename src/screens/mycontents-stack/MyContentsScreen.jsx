import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

const MyContentsScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={mainScreenStyle}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <MaterialCommunityIcons
                        name="fire"
                        size={32}
                        color={colors.mainColor}
                    />
                    <Text style={{ fontSize: 20 }}>My Contents</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyContentsScreen;
