import { Image, StyleSheet } from "react-native";

export default function DetailsImage() {
  return (
    <Image
      style={styles.image}
      resizeMode="contain"
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKOXy7GSVGKOL7rH7ttHPvOkQA17W0weeAg&s",
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 350,
  },
});
