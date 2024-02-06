import { View, ScrollView, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Text } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

import MyDivider from "../../components/MyDivder";
import ContentPreview from "../../components/ContentPreview";

import { useSelector } from "react-redux";

const ContentDetailsScreen = ({ route, navigation }) => {
    const { content } = route.params;
    return (
        <ScrollView contentContainerStyle={mainScreenStyle}>
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontSize: 20 }}>{content.title}</Text>
                <View
                    style={{
                        padding: 10,
                        marginVertical: 10,
                        borderRadius: 5,
                        backgroundColor: colors.backgroundColorGrayLight,
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="clock"
                            size={24}
                            color={colors.mainColor}
                            style={{ paddingRight: 10 }}
                        />
                        <Text style={{ fontSize: 18 }}>{content.date}</Text>
                    </View>
                    <MyDivider />
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="map-marker"
                            size={24}
                            color={colors.mainColor}
                            style={{ paddingRight: 10 }}
                        />
                        <Text style={{ fontSize: 18 }}>{content.address}</Text>
                    </View>
                    <MyDivider />
                    <Text style={{ fontSize: 18 }}>{content.description}</Text>
                    <MyDivider />
                    {/* <Text style={{ color: colors.mainColor }}>
                        ID: {content.id} (interal)
                    </Text> */}
                </View>
                <Image
                    source={{ uri: content.image }}
                    style={{ height: 300, borderRadius: 5 }}
                />
            </View>
        </ScrollView>
    );
};

export default ContentDetailsScreen;
