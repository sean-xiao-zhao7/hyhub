import { Card, Text } from "react-native-paper";

const ContentPreview = ({ id, title, date, address, description }) => (
    <Card mode="elevated">
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
