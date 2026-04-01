import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetails() {
    const {productId} = useLocalSearchParams()
    
    return (
        <View>
            <Text>The ID is: {productId}</Text>
        </View>
    )
}