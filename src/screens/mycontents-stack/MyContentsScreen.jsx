import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Text } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";
import MyDivider from "../../components/MyDivder";

import { useSelector } from "react-redux";

const MyContentsScreen = ({ navigation }) => {
    const contents = useSelector((state) => {
        return state.myContents.contents.map((content) => JSON.parse(content));
    });

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
                <MyDivider />
                <Button
                    icon="plus"
                    mode="contained"
                    onPress={() => navigation.navigate("AddContentScreen")}
                >
                    Add your event, service, etc.
                </Button>
                <View>
                    {contents.map((content) => {
                        return (
                            <View key={content.id}>
                                <Text>{content.title}</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyContentsScreen;
