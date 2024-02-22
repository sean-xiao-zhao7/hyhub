import { useState } from "react";
import { View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";

// customs
import { addContentAction } from "../../redux/slices/allContentsSlice";
import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";
import MyDivider from "../../components/MyDivder";

const AddContentScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const addContent = () => {
        dispatch(
            addContentAction({
                title,
                date,
                address,
                description,
                image,
            })
        );
        navigation.goBack();
    };

    const addImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={mainScreenStyle}>
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{ alignItems: "center", flexDirection: "row" }}
                    >
                        <MaterialCommunityIcons
                            name="fire"
                            size={32}
                            color={colors.mainColor}
                        />
                        <Text style={{ fontSize: 20 }}>Add New Content</Text>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => navigation.goBack()}
                    >
                        Cancel
                    </Button>
                </View>
                <MyDivider />
                <View style={{ paddingHorizontal: 5, paddingBottom: 40 }}>
                    <MyDivider />
                    <TextInput
                        label="Full Title"
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <MyDivider />
                    <MyDivider />
                    <TextInput
                        label="Date (if applicable)"
                        value={date}
                        onChangeText={(text) => setDate(text)}
                    />
                    <MyDivider />
                    <MyDivider />
                    <TextInput
                        label="Address / Location / Online"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <MyDivider />
                    <MyDivider />
                    <TextInput
                        label="Full Description / Details"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                    <MyDivider />
                    <MyDivider />
                    {image ? (
                        <Image
                            source={{ uri: image }}
                            style={{ height: 300, marginBottom: 10 }}
                        />
                    ) : null}
                    <Button mode="contained" onPress={addImage}>
                        {image ? "Re-add Image" : "Add Image"}
                    </Button>
                    <MyDivider />
                    <MyDivider />
                    <Button mode="contained" onPress={addContent}>
                        Submit new content
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddContentScreen;
