import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { default as commonStyles } from "../styles/commonStyles";
import ImageContainer from "./ImageContainer";

interface CupSeriesProps {
  searchTitle: string;
}

export default function CupSeries({ searchTitle }: CupSeriesProps) {

  const images = [
    {
      id: 1,
      src: require("../assets/images/cup-series/Caramel-Macchiato.jpeg"),
      title: "Caramel Macchiato",
      price: 149,
    },
    {
      id: 2,
      src: require("../assets/images/cup-series/Hazelnut-Latte.jpeg"),
      title: "Hazelnut Latte",
      price: 149,
    },
    {
      id: 3,
      src: require("../assets/images/cup-series/Mocha-Latte.jpeg"),
      title: "Mocha Latte",
      price: 149,
    },
    {
      id: 4,
      src: require("../assets/images/cup-series/Spanish-Latte.jpeg"),
      title: "Spanish Latte",
      price: 149,
    },
    {
      id: 5,
      src: require("../assets/images/cup-series/Vanila-Latte.jpeg"),
      title: "Vanila Latte",
      price: 149,
    },
  ]

  const [filteredImage, setFilteredImage] = useState(images);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    async function filterData() {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 100));

      let results;
      if (!searchTitle.trim()) {
        results = images;
      } else {
        results = images.filter((item) =>
          item.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
      }
      setFilteredImage(results);
      setLoading(false);
    }
    filterData();
  }, [searchTitle])

  return (
    <View style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Text style={[commonStyles.justifiedText, commonStyles.componentTitle]}>
        Cup Series
      </Text>

         {loading ? (
      <Text style={{ textAlign: "center", marginVertical: 16 }}>Loading...</Text>
    ) : (

      <ScrollView
        horizontal
        style={{ paddingTop: 12 }}
        contentContainerStyle={commonStyles.between}
        showsHorizontalScrollIndicator={false}
      >    
          {filteredImage.map((item) => 
          <View key={item.id} style={{ marginRight: 12, padding: 4, backgroundColor: "#f5f5dc" }}>
            <ImageContainer 
              source={item.src}
              width={120}
              height={130}
              borderRadius={10}
            />   
            <View>
            <Text style={{textAlign: "center", fontWeight: "bold"}}>{item.title}</Text>
            <View style={commonStyles.between}>
              <Text>{item.price}</Text>
              <Text style={{fontWeight: "bold"}}>+</Text>
            </View>
            </View>
          </View> 
          )}
     
      </ScrollView>
    )}
      </View>
  )
}