import { View } from "react-native";
import { Card, Text, Button } from "react-native-paper";
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

    return padding === "none" ? (
        <Card
            mode="contained"
            style={{
                borderRadius: 0,
                borderBottomWidth: 5,
                borderBottomColor: colors.backgroundColorGrayLight,
            }}
        >
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>{title}</Text>
                {description ? (
                    <Text
                        style={{
                            fontSize: 18,
                            maxHeight: 90,
                            marginTop: 5,
                        }}
                    >
                        {description}
                    </Text>
                ) : null}
            </View>
            <Card.Cover
                source={{ uri: image }}
                style={{ borderRadius: 0, height: 350 }}
            />
            <View style={{ padding: 10 }}>
                {address ? (
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="map-marker"
                            size={26}
                            color={colors.mainColor}
                            style={{ paddingRight: 5 }}
                        />

                        <Text style={{ fontSize: 16 }}>{address}</Text>
                    </View>
                ) : null}
                {address && date ? <MyDivider /> : null}
                {date ? (
                    <View
                        style={{ alignItems: "center", flexDirection: "row" }}
                    >
                        <MaterialCommunityIcons
                            name="clock"
                            size={26}
                            color={colors.mainColor}
                            style={{ paddingRight: 5 }}
                        />
                        <Text style={{ fontSize: 16 }}>{date}</Text>
                    </View>
                ) : null}
            </View>
            <Card.Actions>
                <Button>Join</Button>
                <Button
                    onPress={() =>
                        navigation.navigate("ContentDetailsScreen", {
                            content: {
                                id,
                                title,
                                date,
                                address,
                                description,
                                image,
                            },
                        })
                    }
                >
                    Details
                </Button>
            </Card.Actions>
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
