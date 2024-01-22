import { Card, Text } from "react-native-paper";
import colors from "../styles/colors";

const ContentPreview = ({ id, title, date, address, description, padding }) =>
    padding === "none" ? (
        <Card
            mode="contained"
            style={{
                backgroundColor: colors.backgroundColorGrayLight,
                borderRadius: 0,
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
    ) : (
        <Card
            mode="outlined"
            style={{
                backgroundColor: colors.backgroundColorGrayLight,
                borderColor: colors.backgroundColorGray,
                borderRadius: 10,
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
