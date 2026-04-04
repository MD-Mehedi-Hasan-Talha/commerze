import { Image, StyleSheet } from "react-native";

export default function DetailsImage({ imageSrc }: { imageSrc?: string }) {
  return (
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{
        uri: imageSrc,
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
