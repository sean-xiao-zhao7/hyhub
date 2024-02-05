import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";
import MyDivider from "../../components/MyDivder";

const ManageContentScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={mainScreenStyle}>
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{ alignItems: "center", flexDirection: "row" }}
                    >
                        <MaterialCommunityIcons
                            name="fire"
                            size={32}
                            color={colors.mainColor}
                        />
                        <Text style={{ fontSize: 20 }}>Manage</Text>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => props.navigation.goBack()}
                    >
                        Cancel
                    </Button>
                </View>
                <MyDivider />
                <Text>Manage Content Screen</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ManageContentScreen;
