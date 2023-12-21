import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Text, TextInput } from "react-native-paper";

import mainScreenStyle from "../styles/mainScreenStyle";
import colors from "../../styles/colors";
import MyDivider from "../../components/MyDivder";

const AddContentScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

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
                <View>
                    <Text>Full Title</Text>
                    <MyDivider />
                    <TextInput
                        label="Title"
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <MyDivider />
                    <Text>Date (if applicable)</Text>
                    <MyDivider />
                    <TextInput
                        label="Date"
                        value={date}
                        onChangeText={(text) => setDate(text)}
                    />
                    <MyDivider />
                    <Text>Address / Location / Online</Text>
                    <MyDivider />
                    <TextInput
                        label="Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <MyDivider />
                    <Text>Full Description / Details</Text>
                    <MyDivider />
                    <TextInput
                        label="Description"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                    <MyDivider />
                    <Button
                        mode="contained"
                        onPress={() => navigation.goBack()}
                    >
                        Add
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddContentScreen;
