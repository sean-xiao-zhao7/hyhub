import { Divider } from "react-native-paper";

const MyDivider = ({ direction }) => {
    return direction && direction === "horizontal" ? (
        <Divider
            style={{
                backgroundColor: "transparent",
                paddingHorizontal: 5,
            }}
        />
    ) : (
        <Divider
            style={{
                backgroundColor: "transparent",
                paddingVertical: 5,
            }}
        />
    );
};

export default MyDivider;
