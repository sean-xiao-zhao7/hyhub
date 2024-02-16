import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";

const UserContentsScreen = () => {
    return (
        <ScrollView contentContainerStyle={mainScreenStyle}>
            <Text>User contents</Text>
        </ScrollView>
    );
};

export default UserContentsScreen;
