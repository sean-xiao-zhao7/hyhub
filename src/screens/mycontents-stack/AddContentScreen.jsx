import { useState } from "react";

import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useDispatch } from "react-redux";
import { addContentAction } from "../../redux/slices/myContentsSlice";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";

import MyDivider from "../../components/MyDivder";
import Content from "../../models/content";

const AddContentScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

    const addContent = () => {
        const newContent = new Content(title, date, address, description);
        dispatch(addContentAction(newContent));
        navigation.goBack();
    };

    return (
        <SafeAreaView>
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
                <View style={{ paddingHorizontal: 5 }}>
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
                    <Button mode="contained" onPress={() => addContent()}>
                        Add
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddContentScreen;
