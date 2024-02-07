import { View, ScrollView, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Text } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

import MyDivider from "../../components/MyDivder";

const ContentDetailsScreen = ({ route, navigation }) => {
    const { content } = route.params;
    return (
        <ScrollView contentContainerStyle={mainScreenStyle}>
            <View style={{ padding: 5 }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "600",
                        textAlign: "center",
                        marginTop: 10,
                        color: colors.lighterBlack,
                    }}
                >
                    {content.title}
                </Text>
                <MyDivider />
                <Text style={{ textAlign: "center", color: colors.mainColor }}>
                    Event
                </Text>
                <MyDivider />
                <Text
                    style={{
                        fontSize: 20,
                        marginTop: 5,
                        paddingHorizontal: 10,
                    }}
                >
                    {content.description}
                </Text>
                <MyDivider />
                <View
                    style={{
                        paddingVertical: 25,
                        paddingHorizontal: 10,
                        marginVertical: 10,
                        borderRadius: 5,
                        backgroundColor: colors.backgroundColorGrayLight,
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            width: "80%",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="clock-outline"
                            size={24}
                            color={colors.mainColor}
                            style={{ paddingRight: 10 }}
                        />
                        <Text style={{ fontSize: 20 }}>{content.date}</Text>
                    </View>
                    <MyDivider />
                    <MyDivider />
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            width: "80%",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="map-marker"
                            size={24}
                            color={colors.mainColor}
                            style={{ paddingRight: 10 }}
                        />
                        <Text style={{ fontSize: 20 }}>{content.address}</Text>
                    </View>
                    {/* <Text style={{ color: colors.mainColor }}>
                        ID: {content.id} (interal)
                    </Text> */}
                </View>
                <MyDivider />
                <Image
                    source={{ uri: content.image }}
                    style={{ height: 300, borderRadius: 5 }}
                />
            </View>
        </ScrollView>
    );
};

export default ContentDetailsScreen;
