import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Text } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

import MyDivider from "../../components/MyDivder";
import ContentPreview from "../../components/ContentPreview";

import { useSelector } from "react-redux";

const MyContentsScreen = ({ navigation }) => {
    const contents = useSelector((state) => {
        return state.myContents.contents;
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={mainScreenStyle}>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <MaterialCommunityIcons
                        name="diamond-stone"
                        size={30}
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
                        const classContent = JSON.parse(content);
                        return (
                            <View key={classContent.id}>
                                <MyDivider />
                                <ContentPreview
                                    id={classContent.id}
                                    title={classContent.title}
                                    content={classContent.date}
                                    address={classContent.address}
                                    description={classContent.description}
                                />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyContentsScreen;
