import GlobalStyle from "@/app/global-style";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Categories from "../../data/Category.json";

export default function Category() {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={Categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <SingleCategory category={item} />}
      />
    </View>
  );
}

function SingleCategory({ category }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.categoryItem,
        pressed && { transform: [{ scale: 0.95 }] },
      ]}
    >
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>{category.icon}</Text>
      </View>

      <Text numberOfLines={1} style={styles.text}>
        {category.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },

  list: {
    paddingHorizontal: 16,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 16,
    width: 70,
  },

  iconWrap: {
    width: 65,
    height: 65,
    borderRadius: 32.5, // 🔥 perfect circle
    backgroundColor: GlobalStyle.colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,

    // soft shadow
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  icon: {
    fontSize: 26,
  },

  text: {
    textAlign: "center",
    fontSize: 12,
    color: GlobalStyle.colors.gray,
  },
});
