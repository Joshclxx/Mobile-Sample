import { Image, ScrollView, Text, View } from "react-native";
import commonStyles from "../styles/commonStyles";

export default function Index() {
  return (
    <ScrollView>
      <View style={commonStyles.container}>
        <Text style={[commonStyles.title, commonStyles.justifiedText]}>
          Good Afternoon Joshclxx!
        </Text>
      </View>

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

      <ScrollView
        horizontal
        style={{ paddingTop: 20 }}
        contentContainerStyle={commonStyles.between}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Image
            source={require("../assets/images/coffee-shop.png")}
            style={commonStyles.containerBoxes}
          />
          <Text style={commonStyles.description}>Helloo</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/coffee-shop.png")}
            style={commonStyles.containerBoxes}
          />
          <Text style={commonStyles.description}>Helloo</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/coffee-shop.png")}
            style={commonStyles.containerBoxes}
          />
          <Text style={commonStyles.description}>Helloo</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/coffee-shop.png")}
            style={commonStyles.containerBoxes}
          />
          <Text style={commonStyles.description}>Helloo</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/coffee-shop.png")}
            style={commonStyles.containerBoxes}
          />
          <Text style={commonStyles.description}>Helloo</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/coffee-shop.png")}
            style={commonStyles.containerBoxes}
          />
          <Text style={commonStyles.description}>Helloo</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
