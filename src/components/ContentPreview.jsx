import { Card, Text } from "react-native-paper";
import colors from "../styles/colors";

const ContentPreview = ({ id, title, date, address, description, padding }) =>
    padding === "none" ? (
        <Card
            mode="contained"
            style={{
                borderRadius: 0,
                borderBottomWidth: 1,
                borderBottomColor: colors.backgroundColorGrayLight,
            }}
        >
            <Card.Title title={title} titleStyle={{ fontSize: 20 }} />
            <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ borderRadius: 0 }}
            />
            <Card.Content style={{ marginHorizontal: 5, marginVertical: 10 }}>
                {description ? (
                    <Text style={{ fontSize: 18 }}>{description}</Text>
                ) : (
                    ""
                )}
                {date ? <Text style={{ fontSize: 18 }}>{date}</Text> : ""}
                {address ? <Text style={{ fontSize: 18 }}>{address}</Text> : ""}
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
