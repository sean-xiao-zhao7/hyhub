import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import mainScreenStyle from "../styles/mainScreenStyle";

const DiscoveryScreen = () => {
    return (
        <SafeAreaView>
            <View style={mainScreenStyle}>
                <Text>Discovery Screen</Text>
            </View>
        </SafeAreaView>
    );
};

export default DiscoveryScreen;
