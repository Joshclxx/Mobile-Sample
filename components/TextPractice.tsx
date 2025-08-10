import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function TextPractice() {
    return (
        <ScrollView>
            <View style={{ marginBottom: 20}}>
            <Text style={{ fontSize: 34, textAlign: "center" }}>Heading 34</Text>

            <Text style={{ fontSize: 12, textAlign: "center", marginTop: 20 }}>Size 12</Text>
            <Text style={{ fontSize: 14, textAlign: "center" }}>Size 14</Text>
            <Text style={{ fontSize: 16, textAlign: "center" }}>Size 16</Text>
            <Text style={{ fontSize: 20, textAlign: "center" }}>Size 20</Text>
            <Text style={{ fontSize: 24, textAlign: "center" }}>Size 24</Text>
            <Text style={{ fontSize: 28, textAlign: "center" }}>Size 16</Text>
            <Text style={{ fontSize: 32, textAlign: "center" }}>Size 32</Text>
            <Text style={{ fontSize: 36, textAlign: "center" }}>Size 36</Text>
            <Text style={{ fontSize: 40, textAlign: "center" }}>Size 40</Text>
            <Text style={{ fontSize: 44, textAlign: "center" }}>Size 44</Text>
            <Text style={{ fontSize: 48, textAlign: "center" }}>Size 48</Text>
            <Text style={{ fontSize: 52, textAlign: "center" }}>Size 52</Text>
            <Text style={{ fontSize: 56, textAlign: "center" }}>Size 56</Text>
            <Text style={{ fontSize: 60, textAlign: "center" }}>Size 60</Text>
            <Text style={{ fontSize: 64, textAlign: "center" }}>Size 64</Text>
            </View>

            <View style={{ marginBottom: 20}}>
            <Text style={{ fontWeight: "normal", textAlign: "center", fontSize: 24}}>Normal</Text>
            <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 24}}>Bold</Text>
            <Text style={{ fontWeight: "100", textAlign: "center", fontSize: 24}}>100</Text>
            <Text style={{ fontWeight: "200", textAlign: "center", fontSize: 24}}>200</Text>
            <Text style={{ fontWeight: "300", textAlign: "center", fontSize: 24}}>300</Text>
            <Text style={{ fontWeight: "400", textAlign: "center", fontSize: 24}}>400</Text>
            <Text style={{ fontWeight: "500", textAlign: "center", fontSize: 24}}>500</Text>
            <Text style={{ fontWeight: "600", textAlign: "center", fontSize: 24}}>600</Text>
            <Text style={{ fontWeight: "700", textAlign: "center", fontSize: 24}}>700</Text>
            <Text style={{ fontWeight: "800", textAlign: "center", fontSize: 24}}>800</Text>
            <Text style={{ fontWeight: "900", textAlign: "center", fontSize: 24}}>900</Text>
            </View>
        </ScrollView>

    );
}