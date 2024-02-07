import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../../styles/colors";

import ContentPreview from "../../components/ContentPreview";
import MyDivider from "../../components/MyDivder";
import { loadContentsAction } from "../../redux/slices/myContentsSlice";

const DiscoveryScreen = () => {
    const dispatch = useDispatch();

    const contents = useSelector((state) => {
        return state.myContents.contents;
    });

    useEffect(() => {
        dispatch(loadContentsAction());
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.mainColor,
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ backgroundColor: "white" }}
            >
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        paddingBottom: 10,
                        paddingHorizontal: 10,
                        justifyContent: "space-between",
                        backgroundColor: colors.mainColor,
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="filter-variant"
                            size={32}
                            color={"#fff"}
                        />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: "#fff",
                                marginLeft: 5,
                                fontWeight: 500,
                            }}
                        >
                            Find Gems
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="magnify"
                            size={32}
                            color={"#fff"}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: "white" }}>
                    {contents.map((classContent) => {
                        return (
                            <View key={classContent.id}>
                                <ContentPreview
                                    id={classContent.id}
                                    title={classContent.title}
                                    date={classContent.date}
                                    address={classContent.address}
                                    description={classContent.description}
                                    image={classContent.image}
                                    padding={"none"}
                                />
                                <MyDivider />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DiscoveryScreen;
