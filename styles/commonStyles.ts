import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#1B263B",
    color: "white",
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 20,
    color: "#E4E7EB",
  },
  description: {
    fontSize: 16,
    fontWeight: 200,
    color: "#1B263B",
  },
  image: {
    width: 350,
    height: 272,
    borderRadius: 10,
    elevation: 12,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 12,
  },
  imageText: {
    paddingTop: 9,
    color: "#FFFFFF",
  },
  justifiedText: {
    textAlign: "justify",
    paddingRight: 16,
    paddingLeft: 16,
  },
  textShadow: {
    textShadowColor: "#2A2F3B",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  between: {
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    gap: 12,
  },
  containerBoxes: {
    width: 140,
    height: 160,
    borderRadius: 8,
    marginRight: 12,
  },

  // IMAGE CONTAINER STYLES
  imageContainers: {
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCont: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },

  // COMPONENT BACKGROUND
    background: {
    flex: 1, // fills the screen
    resizeMode: "cover", // or "contain"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  //COMPONENT TITLE
  componentTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  // SEARCH TITLE BAR
    input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    margin: 10,
    borderRadius: 5,
  },
});

export default styles;
