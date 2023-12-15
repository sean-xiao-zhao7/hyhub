import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MyContentsScreen = (props) => {
    return (
        <SafeAreaProvider>
            <View>
                <Text>MyContents Screen</Text>
            </View>
        </SafeAreaProvider>
    );
};

export default MyContentsScreen;
