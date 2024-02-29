import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Button, Text } from "react-native-paper";

import MyDivider from "../../components/MyDivder";

import mainScreenStyle from "../styles/mainScreenStyle";
import { h1 } from "../../styles/fonts";
import colors from "../../styles/colors";

const UserHomeScreen = () => {
    const [authStatus, setAuthStatus] = useState(false);

    if (!authStatus) {
        return (
            <View
                style={{
                    flex: 1,
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={h1}>Join FireGem</Text>
                <View
                    style={{
                        backgroundColor: colors.backgroundColorGrayLight,
                        padding: 10,
                        borderRadius: 10,
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Button style={h1}>Login</Button>
                    <MyDivider />
                    <Button style={h1}>Sign up</Button>
                </View>
            </View>
        );
    } else {
        return (
            <ScrollView style={mainScreenStyle}>
                <Text>Logged in.</Text>
            </ScrollView>
        );
    }
};

export default UserHomeScreen;
