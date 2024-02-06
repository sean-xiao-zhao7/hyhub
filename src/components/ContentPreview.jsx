import { View } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// customs
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
                paddingVertical: 10,
            }}
        >
            <Card.Title
                title={title}
                titleStyle={{
                    fontSize: 20,
                }}
                titleNumberOfLines={2}
            />
            {description ? (
                <Card.Content>
                    <Text
                        style={{
                            fontSize: 16,
                            maxHeight: 80,
                            marginBottom: 10,
                        }}
                    >
                        {description}
                    </Text>
                </Card.Content>
            ) : null}

            <Card.Cover
                source={{ uri: image }}
                style={{ borderRadius: 0, height: 350 }}
            />
            {address ? (
                <Card.Content style={{ marginTop: 15 }}>
                    <View
                        style={{ alignItems: "center", flexDirection: "row" }}
                    >
                        <MaterialCommunityIcons
                            name="map-marker"
                            size={26}
                            color={colors.mainColor}
                            style={{ paddingRight: 5 }}
                        />

                        <Text style={{ fontSize: 16 }}>{address}</Text>
                    </View>
                </Card.Content>
            ) : null}
            {date ? (
                <Card.Content>
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
                </Card.Content>
            ) : null}
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
