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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 9,
  },
  justifiedText: {
    textAlign: "justify",
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
});

export default styles;
