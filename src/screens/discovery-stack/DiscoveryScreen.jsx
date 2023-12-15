import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import mainScreenStyle from "../styles/mainScreenStyle";

const DiscoveryScreen = () => {
    return (
        <SafeAreaProvider>
            <View style={mainScreenStyle}>
                <Text>Discovery Screen</Text>
            </View>
        </SafeAreaProvider>
    );
};

export default DiscoveryScreen;
