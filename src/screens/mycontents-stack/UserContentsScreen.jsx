import { ScrollView, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native-paper";

import ContentPreview from "../../components/ContentPreview";
import MyDivider from "../../components/MyDivder";
import { userLoadContentsAction } from "../../redux/slices/userContentsSlice";

const UserContentsScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userLoadContentsAction());
    }, []);

    const userContents = useSelector((state) => state.userContents.contents);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
            {!userContents || userContents.length <= 0 ? (
                <Text
                    style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}
                >
                    Nothing saved yet.
                </Text>
            ) : null}
            {userContents.map((singleContent) => {
                if (singleContent.id) {
                    return (
                        <View key={singleContent.id}>
                            <ContentPreview
                                id={singleContent.id}
                                title={singleContent.title}
                                date={singleContent.date}
                                address={singleContent.address}
                                description={singleContent.description}
                                image={singleContent.image}
                                heart={singleContent.heart}
                                type={"singleUser"}
                            />
                            <MyDivider />
                        </View>
                    );
                }
            })}
        </ScrollView>
    );
};

export default UserContentsScreen;
