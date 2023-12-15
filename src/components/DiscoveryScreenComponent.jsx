import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const DiscoveryScreenComponent = (props) => {
    return (
        <SafeAreaProvider>
            <View>
                <Text>Discovery Screen</Text>
            </View>
        </SafeAreaProvider>
    );
};

export default DiscoveryScreenComponent;
