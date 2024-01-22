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
        <SafeAreaView style={{ flex: 1 }}>
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
                        paddingHorizontal: 10,
                    }}
                >
                    <MaterialCommunityIcons
                        name="fire"
                        size={32}
                        color={colors.mainColor}
                    />
                    <Text style={{ fontSize: 20 }}>
                        Discover gems around you.
                    </Text>
                </View>
                <MyDivider />
                <MyDivider />
                <View>
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
