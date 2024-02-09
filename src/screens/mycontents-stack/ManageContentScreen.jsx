import { View, ScrollView, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";
import MyDivider from "../../components/MyDivder";
import { useDispatch } from "react-redux";
import { deleteContentAction } from "../../redux/slices/myContentsSlice";

const ManageContentScreen = (props) => {
    const dispatch = useDispatch();

    const deleteContent = () => {
        dispatch(deleteContentAction(props.route.params.content.id));
        props.navigation.goBack();
    };

    return (
        <ScrollView style={mainScreenStyle}>
            <View
                style={{
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <MaterialCommunityIcons
                        name="diamond"
                        size={32}
                        color={colors.mainColor}
                        style={{ paddingRight: 5 }}
                    />
                    <Text style={{ fontSize: 20 }}>Manage Content</Text>
                </View>
                <Button
                    mode="contained"
                    onPress={() => props.navigation.goBack()}
                >
                    Cancel
                </Button>
            </View>
            <MyDivider />
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontSize: 20 }}>
                    {props.route.params.content.title}
                </Text>
                <View
                    style={{
                        padding: 10,
                        marginVertical: 10,
                        borderRadius: 5,
                        backgroundColor: colors.backgroundColorGrayLight,
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="clock"
                            size={24}
                            color={colors.mainColor}
                            style={{ paddingRight: 10 }}
                        />
                        <Text style={{ fontSize: 16 }}>
                            {props.route.params.content.date}
                        </Text>
                    </View>
                    <MyDivider />
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="map-marker"
                            size={24}
                            color={colors.mainColor}
                            style={{ paddingRight: 10 }}
                        />
                        <Text style={{ fontSize: 16 }}>
                            {props.route.params.content.address}
                        </Text>
                    </View>
                    <MyDivider />
                    <Text style={{ fontSize: 16 }}>
                        {props.route.params.content.description}
                    </Text>
                    <MyDivider />
                    <Text style={{ color: colors.mainColor }}>
                        ID: {props.route.params.content.id} (interal)
                    </Text>
                </View>
                <Image
                    source={{ uri: props.route.params.content.image }}
                    style={{ height: 300, borderRadius: 5 }}
                />
            </View>
            <Button icon="delete" mode="contained" onPress={deleteContent}>
                Delete this content
            </Button>
        </ScrollView>
    );
};

export default ManageContentScreen;
