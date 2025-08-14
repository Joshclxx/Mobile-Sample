import Home from "@/components/Home";
// import TextPractice from "@/components/TextPractice";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
    <View>
      <Home />
      {/* <CupSeries searchTitle={""} /> */}
      {/* <TextPractice /> */}
    </View>
    </ScrollView>
  );
}


// Next To Create (GOAL TO ACCOMPLISH ON AUGUST 15, 2025)
// 1. Tabs (Navigation Bar)
// 2. See More To Avoid Infinite Scrolling In Home Page
// 3. Search Bar ==>> DONE
// 4. Profile Account
// 5. Login Form
