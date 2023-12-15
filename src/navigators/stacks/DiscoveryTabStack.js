import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoveryScreen from "../../screens/discovery-stack/DiscoveryScreen";

const DiscoveryTabStack = createNativeStackNavigator();

const DiscoveryTabStackNavigator = () => (
    <DiscoveryTabStack.Navigator>
        <DiscoveryTabStack.Screen
            name="DiscoveryScreen"
            component={DiscoveryScreen}
        />
    </DiscoveryTabStack.Navigator>
);

export default DiscoveryTabStackNavigator;
