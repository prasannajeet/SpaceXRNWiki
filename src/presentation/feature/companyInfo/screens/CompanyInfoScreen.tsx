import { ActivityIndicator, Spacer, Surface, Text } from "@react-native-material/core";
import React from "react";
import { Alert, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { VerticalSpacing } from "../../../components/VerticalSpacing";
import { useCompanyInfoViewModel } from "../hooks/useCompanyInfoViewModel";

type CompanyInfoProps = {
    isDarkMode: boolean;
}

export const CompanyInfoScreen = (props: CompanyInfoProps) => {

    const { loading, error, data } = useCompanyInfoViewModel();

    if (loading) return <ActivityIndicator size="large" color="#00ff00" />
    if (error) {
        Alert.alert("There is an error");
        return <View />
    }
    return <View style={{
        width: "100%", height: "100%",
        backgroundColor: props.isDarkMode ? Colors.cadetblue : Colors.azure,
    }}>
        <Surface
            elevation={6}
            category="medium"
            style={{ margin: "2%", padding: "5%" }}>
            <Text>{JSON.stringify(data)}</Text>
        </Surface>
    </View>
}
