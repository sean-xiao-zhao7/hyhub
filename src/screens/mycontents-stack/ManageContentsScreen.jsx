import { View, ScrollView } from "react-native";
import { Button } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import MyDivider from "../../components/MyDivder";
import ContentPreview from "../../components/ContentPreview";

import { useSelector } from "react-redux";

const ManageContentsScreen = ({ navigation }) => {
    const contents = useSelector((state) => {
        return state.allContents.contents;
    });

    return (
        <ScrollView contentContainerStyle={mainScreenStyle}>
            <Button
                icon="plus"
                mode="contained"
                onPress={() => navigation.navigate("AddContentScreen")}
            >
                Add your event, service, etc.
            </Button>
            <View>
                {contents.map((classContent) => {
                    return (
                        <View key={classContent.id}>
                            <MyDivider />
                            <ContentPreview
                                id={classContent.id}
                                title={classContent.title}
                                date={classContent.date}
                                address={classContent.address}
                                description={classContent.description}
                                image={classContent.image}
                                heart={classContent.heart}
                                type={"manageContent"}
                            />
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default ManageContentsScreen;
