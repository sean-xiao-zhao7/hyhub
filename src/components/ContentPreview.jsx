import { Card, Text } from "react-native-paper";
import colors from "../styles/colors";

const ContentPreview = ({ id, title, date, address, description, padding }) =>
    padding === "none" ? (
        <Card
            mode="contained"
            style={{
                borderRadius: 0,
                borderTopWidth: 1,
                borderTopColor: colors.mainColor,
            }}
        >
            <Card.Title
                title={title}
                titleStyle={{ fontSize: 20, paddingVertical: 20 }}
            />
            <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ borderRadius: 0, height: 300 }}
            />
            <Card.Content style={{ marginTop: 15 }}>
                {description ? (
                    <Text style={{ fontSize: 16 }}>{description}</Text>
                ) : (
                    ""
                )}
                {date ? <Text style={{ fontSize: 16 }}>{date}</Text> : ""}
                {address ? <Text style={{ fontSize: 16 }}>{address}</Text> : ""}
            </Card.Content>
            {/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions> */}
        </Card>
    ) : (
        <Card
            mode="outlined"
            style={{
                backgroundColor: colors.backgroundColorGrayLight,
                borderColor: colors.backgroundColorGray,
                borderRadius: 5,
            }}
            contentStyle={{
                paddingVertical: 10,
            }}
        >
            <Card.Title title={title} />
            <Card.Content>
                <Text variant="titleLarge">{date}</Text>
                <Text variant="bodyMedium">{address}</Text>
                <Text variant="bodyMedium">{description}</Text>
            </Card.Content>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
    </Card.Actions> */}
        </Card>
    );

export default ContentPreview;
