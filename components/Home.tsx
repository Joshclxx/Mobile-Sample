import { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { default as commonStyles } from "../styles/commonStyles";
import CupSeries from "./CupSeries";


export default function Index() {

  const [searchTitle, setSearchTitle] = useState("")

  return (
    // <ImageBackground
    //   source={require("../assets/images/bg.jpeg")}
    //   style={[commonStyles.background, commonStyles.content]}
    //   imageStyle={{ opacity: 100 }}
    // >
    <ScrollView>
      <View style={commonStyles.container}>
        <Text style={[commonStyles.title, commonStyles.justifiedText]}>
          Good Afternoon Joshclxx!
        </Text>
      </View>

      <TextInput
        value={searchTitle} 
        onChangeText={setSearchTitle}
        placeholder="Find your mood coffee..."
        style={commonStyles.input}
      >
      </TextInput>
      
      <View style={commonStyles.imageContainer}>
        <Image
          source={require("../assets/images/coffee-shop.png")}
          style={commonStyles.image}
        />
        <View style={commonStyles.imageText}>
          <Text style={[commonStyles.justifiedText, commonStyles.description]}>
            Cozy and inviting coffee shop serving freshly brewed coffee,
            handcrafted beverages, and light bites in a relaxed atmosphere —
            perfect for work, catch-ups, or quiet moments.
          </Text>
        </View>
      </View>
      <CupSeries searchTitle={searchTitle} />
    </ScrollView>
    // </ImageBackground>
  );
}
