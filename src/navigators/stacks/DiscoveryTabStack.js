import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoveryScreen from "../../screens/discovery-stack/DiscoveryScreen";
import noHeaderOptions from "../options/noHeader";

const DiscoveryTabStack = createNativeStackNavigator();

const DiscoveryTabStackNavigator = () => (
    <DiscoveryTabStack.Navigator screenOptions={noHeaderOptions}>
        <DiscoveryTabStack.Screen
            name="DiscoveryScreen"
            component={DiscoveryScreen}
        />
    </DiscoveryTabStack.Navigator>
);

export default DiscoveryTabStackNavigator;
