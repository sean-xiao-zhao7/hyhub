import { Card, Text, Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../styles/colors";

const ContentPreview = ({ id, title, date, address, description, padding }) =>
    padding === "none" ? (
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
                    color: colors.mainColorFont,
                }}
            />
            <Card.Content style={{ marginBottom: 15, marginTop: 0 }}>
                {description ? (
                    <Text style={{ fontSize: 16, maxHeight: 120 }}>
                        {description}
                    </Text>
                ) : (
                    ""
                )}
            </Card.Content>
            <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ borderRadius: 0, height: 350 }}
            />
            <Card.Content style={{ marginTop: 15 }}>
                {date ? <Text style={{ fontSize: 16 }}>{date}</Text> : ""}
                {address ? <Text style={{ fontSize: 16 }}>{address}</Text> : ""}
            </Card.Content>
            <Card.Actions>
                <Button>Join</Button>
                <Button>Save</Button>
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
            />
            <Card.Content>
                {date ? <Text style={{ fontSize: 16 }}>{date}</Text> : ""}
                {address ? <Text style={{ fontSize: 16 }}>{address}</Text> : ""}
            </Card.Content>
            <Card.Actions>
                <Button>Manage</Button>
                <Button>Save</Button>
            </Card.Actions>
        </Card>
    );

export default ContentPreview;
