import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Text } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

import MyDivider from "../../components/MyDivder";
import ContentPreview from "../../components/ContentPreview";

import { useSelector } from "react-redux";

const ContentDetailsScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={mainScreenStyle}>
                <View>
                    <Text>Content details</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ContentDetailsScreen;
