import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import mainScreenStyle from "../styles/mainScreenStyle";

const AccountScreen = () => {
    return (
        <SafeAreaView>
            <View style={mainScreenStyle}>
                <Text>Account Screen</Text>
            </View>
        </SafeAreaView>
    );
};

export default AccountScreen;
