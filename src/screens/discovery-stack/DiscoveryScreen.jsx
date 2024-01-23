import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

import { useSelector } from "react-redux";

import ContentPreview from "../../components/ContentPreview";
import MyDivider from "../../components/MyDivder";

const DiscoveryScreen = () => {
    const contents = useSelector((state) => {
        return state.myContents.contents;
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.mainColorLight }}>
            <ScrollView
                contentContainerStyle={{
                    ...mainScreenStyle,
                    paddingHorizontal: 0,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        padding: 10,
                        // justifyContent: "center",
                        backgroundColor: colors.mainColorLight,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        elevation: 4,
                    }}
                >
                    <MaterialCommunityIcons
                        name="fire"
                        size={32}
                        color={"#fff"}
                    />
                    <Text style={{ fontSize: 20, color: "#fff" }}>
                        Discover Gems
                    </Text>
                </View>
                <View style={{ backgroundColor: "white" }}>
                    {contents.map((content) => {
                        const classContent = JSON.parse(content);
                        return (
                            <View key={classContent.id}>
                                <ContentPreview
                                    id={classContent.id}
                                    title={classContent.title}
                                    content={classContent.date}
                                    address={classContent.address}
                                    description={classContent.description}
                                    padding={"none"}
                                />
                                <MyDivider />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DiscoveryScreen;
