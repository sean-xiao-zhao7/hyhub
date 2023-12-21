import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Text } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";
import MyDivider from "../../components/MyDivder";

const AddContentScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
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
                        <Text style={{ fontSize: 20 }}>Add New Content</Text>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => navigation.goBack()}
                    >
                        Cancel
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddContentScreen;
