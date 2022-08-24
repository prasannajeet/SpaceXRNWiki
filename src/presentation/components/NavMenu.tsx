import { Text } from "@react-native-material/core";
import React from "react";
import { FlatList, StyleSheet, TouchableNativeFeedback, View } from "react-native"

type MenuItem = {
    id: string,
    itemName: string,
}

const DATA: Array<MenuItem> = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        itemName: 'Company info',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        itemName: 'Launches',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        itemName: 'Launch pads',
    },
];

const Item = ({ item, onClick }) => (
    <TouchableNativeFeedback onPress={onClick(item.id)}>
        <View style={styles.item}>
            <Text style={styles.title}>{item.itemName}</Text>
        </View>
    </TouchableNativeFeedback>
);

export const NavMenu = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}

const renderItem = ({ item }) => (
    <Item item={item} onClick={(id: string) => { console.log(`${id}`) }} />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 4,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
        color: "white"
    },
});

