import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ContentPreview from "../../components/ContentPreview";
import MyDivider from "../../components/MyDivder";
import { userLoadContentsAction } from "../../redux/slices/userContentsSlice";
import { loadContentsAction } from "../../redux/slices/allContentsSlice";

const DiscoveryScreen = () => {
    const dispatch = useDispatch();

    const contents = useSelector((state) => {
        return state.allContents.contents;
    });

    useEffect(() => {
        dispatch(loadContentsAction());
        dispatch(userLoadContentsAction());
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                backgroundColor: "white",
                paddingBottom: 100,
            }}
        >
            <View style={{ backgroundColor: "white" }}>
                {contents.map((classContent) => {
                    if (classContent.id) {
                        return (
                            <View key={classContent.id}>
                                <ContentPreview
                                    id={classContent.id}
                                    title={classContent.title}
                                    date={classContent.date}
                                    address={classContent.address}
                                    description={classContent.description}
                                    image={classContent.image}
                                    type={"allUser"}
                                />
                                <MyDivider />
                            </View>
                        );
                    }
                })}
            </View>
        </ScrollView>
    );
};

export default DiscoveryScreen;
