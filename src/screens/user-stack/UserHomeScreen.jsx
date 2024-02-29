import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Button, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import MyDivider from "../../components/MyDivder";

import mainScreenStyle from "../styles/mainScreenStyle";
import { h1, h2 } from "../../styles/fonts";
import colors from "../../styles/colors";

const UserHomeScreen = () => {
    const [authStatus, setAuthStatus] = useState(false);

    if (!authStatus) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingBottom: 200,
                    paddingHorizontal: 30,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <MaterialCommunityIcons
                        name={"fire"}
                        size={36}
                        color={colors.mainColor}
                    />
                    {/* <MyDivider direction={"horizontal"} /> */}
                    <Text style={h1}>Join FireGem</Text>
                </View>
                <MyDivider />
                <MyDivider />
                <MyDivider />
                <Button
                    labelStyle={{ fontSize: 18 }}
                    contentStyle={{ height: 50 }}
                    style={{ borderRadius: 5 }}
                    buttonColor={colors.mainColor}
                    textColor="white"
                    mode="contained"
                >
                    Login
                </Button>
                <MyDivider />
                <MyDivider />
                <Button
                    labelStyle={{ fontSize: 18 }}
                    contentStyle={{ height: 50 }}
                    style={{ borderRadius: 5 }}
                    buttonColor={colors.mainColor}
                    textColor="white"
                    mode="contained"
                >
                    Sign up
                </Button>
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
