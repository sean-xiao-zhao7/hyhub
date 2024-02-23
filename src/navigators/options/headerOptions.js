import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const noHeaderOptions = {
    headerShown: false,
    contentStyle: { backgroundColor: "white" },
};

export const withHeaderOptions = {
    headerShown: true,
    contentStyle: { backgroundColor: "white" },
};

export const modalWithHeaderOptions = {
    headerShown: true,
    presentation: "modal",
    contentStyle: { backgroundColor: "white" },
    headerLeft: () => (
        <Button>
            <MaterialCommunityIcons
                name="arrow-left"
                size={20}
                color={"orange"}
            />
        </Button>
    ),
    title: "",
};

export default noHeaderOptions;
