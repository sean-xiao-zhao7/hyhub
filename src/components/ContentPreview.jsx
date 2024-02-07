import { View } from "react-native";
import { Card, Text, Button, TouchableRipple } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// customs
import MyDivider from "../components/MyDivder";
import colors from "../styles/colors";

const ContentPreview = ({
    id,
    title,
    date,
    address,
    description,
    image,
    padding,
}) => {
    const navigation = useNavigation();
    const manageContent = () => {
        navigation.navigate("ManageContentScreen", {
            content: { id, title, date, address, description, image },
        });
    };

    const goToDetails = () =>
        navigation.navigate("ContentDetailsScreen", {
            content: {
                id,
                title,
                date,
                address,
                description,
                image,
            },
        });

    return padding === "none" ? (
        <Card
            mode="contained"
            style={{
                borderRadius: 0,
                borderBottomWidth: 3,
                borderBottomColor: colors.backgroundColorGrayLight,
                paddingBottom: 10,
                paddingTop: 5,
            }}
        >
            <View
                style={{
                    padding: 10,
                    paddingHorizontal: 20,
                    alignItems: "left",
                }}
            >
                <TouchableRipple onPress={goToDetails}>
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 600,
                            color: colors.mainColorDark,
                        }}
                    >
                        {title}
                    </Text>
                </TouchableRipple>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            color: colors.mainColor,
                            marginTop: 5,
                            fontSize: 16,
                        }}
                    >
                        Event
                    </Text>
                </View>
                {description ? (
                    <TouchableRipple onPress={goToDetails}>
                        <Text
                            style={{
                                fontSize: 18,
                                maxHeight: 120,
                                marginTop: 5,
                                color: colors.lighterBlack,
                                lineHeight: 25,
                                paddingBottom: 5,
                                // width: "95%",
                            }}
                        >
                            {description}
                        </Text>
                    </TouchableRipple>
                ) : null}
            </View>
            <TouchableRipple onPress={goToDetails}>
                <Card.Cover
                    source={{ uri: image }}
                    style={{ borderRadius: 0, height: 300 }}
                />
            </TouchableRipple>
            <View
                style={{
                    flexDirection: "row",
                    paddingHorizontal: 5,
                    paddingVertical: 10,
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <TouchableRipple
                    onPress={goToDetails}
                    style={{ paddingHorizontal: 10 }}
                >
                    <MaterialCommunityIcons
                        name="heart-outline"
                        size={34}
                        color={colors.mainColorDark}
                        style={{ paddingRight: 5 }}
                    />
                </TouchableRipple>
                <View style={{ flexDirection: "row" }}>
                    <TouchableRipple
                        onPress={goToDetails}
                        style={{ paddingHorizontal: 5 }}
                    >
                        <MaterialCommunityIcons
                            name="share"
                            size={34}
                            color={colors.mainColorDark}
                            style={{ paddingRight: 5 }}
                        />
                    </TouchableRipple>
                    <TouchableRipple
                        onPress={goToDetails}
                        style={{ paddingHorizontal: 5 }}
                    >
                        <MaterialCommunityIcons
                            name="share-variant"
                            size={34}
                            color={colors.mainColorDark}
                            style={{ paddingRight: 5 }}
                        />
                    </TouchableRipple>
                    <TouchableRipple
                        onPress={goToDetails}
                        style={{ paddingHorizontal: 5 }}
                    >
                        <MaterialCommunityIcons
                            name="bookmark-outline"
                            size={34}
                            color={colors.mainColorDark}
                            style={{ paddingRight: 5 }}
                        />
                    </TouchableRipple>
                </View>
            </View>
            {address && date ? (
                <View style={{ padding: 10 }}>
                    {address ? (
                        <View
                            style={{
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="map"
                                size={20}
                                color={colors.mainColorVeryLight}
                                style={{ paddingRight: 5 }}
                            />

                            <Text
                                style={{
                                    fontSize: 16,
                                    color: colors.darkerGray,
                                    textAlign: "center",
                                    width: "95%",
                                }}
                            >
                                {address}
                            </Text>
                        </View>
                    ) : null}
                    {address && date ? <MyDivider /> : null}
                    {date ? (
                        <View
                            style={{
                                alignItems: "center",
                                flexDirection: "row",
                            }}
                        >
                            <MaterialCommunityIcons
                                name="clock-outline"
                                size={20}
                                color={colors.mainColorVeryLight}
                                style={{ paddingRight: 5 }}
                            />
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: colors.darkerGray,
                                    textAlign: "center",
                                    width: "95%",
                                }}
                            >
                                {date}
                            </Text>
                        </View>
                    ) : null}
                </View>
            ) : null}
        </Card>
    ) : (
        <Card
            mode="contained"
            style={{
                backgroundColor: colors.backgroundColorGrayLight,
                borderColor: colors.backgroundColorGray,
                borderRadius: 0,
            }}
            contentStyle={{
                paddingVertical: 5,
            }}
        >
            <Card.Title
                title={title}
                titleStyle={{
                    fontSize: 20,
                    paddingVertical: 5,
                    color: colors.mainColorFont,
                }}
                titleNumberOfLines={2}
            />
            <Card.Content>
                {date ? <Text style={{ fontSize: 16 }}>{date}</Text> : ""}
                {address ? <Text style={{ fontSize: 16 }}>{address}</Text> : ""}
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => manageContent()}>Manage</Button>
                <Button>Save</Button>
            </Card.Actions>
        </Card>
    );
};

export default ContentPreview;
