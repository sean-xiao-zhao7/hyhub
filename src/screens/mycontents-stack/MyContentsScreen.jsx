import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import mainScreenStyle from "../styles/mainScreenStyle";

const MyContentsScreen = () => {
    return (
        <SafeAreaProvider>
            <View style={mainScreenStyle}>
                <Text>MyContents Screen</Text>
            </View>
        </SafeAreaProvider>
    );
};

export default MyContentsScreen;
