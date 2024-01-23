import { Card, Text } from "react-native-paper";
import colors from "../styles/colors";

const ContentPreview = ({ id, title, date, address, description, padding }) =>
    padding === "none" ? (
        <Card
            mode="contained"
            style={{
                borderRadius: 0,
                borderTopWidth: 3,
                borderTopColor: colors.backgroundColorGrayLight,
            }}
        >
            <Card.Title
                title={title}
                titleStyle={{
                    fontSize: 20,
                    paddingTop: 15,
                    color: colors.mainColorFont,
                }}
            />
            <Card.Content style={{ marginBottom: 15, marginTop: 5 }}>
                {description ? (
                    <Text style={{ fontSize: 16 }}>{description}</Text>
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
            {/* <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions> */}
        </Card>
    ) : (
        <Card
            mode="contained"
            style={{
                backgroundColor: colors.backgroundColorGrayLight,
                borderColor: colors.backgroundColorGray,
                borderRadius: 5,
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
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
            {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
    </Card.Actions> */}
        </Card>
    );

export default ContentPreview;
