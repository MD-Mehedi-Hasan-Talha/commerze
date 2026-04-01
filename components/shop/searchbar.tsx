import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Global from "../../app/global-style";

export default function SearchBar() {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        {/* Search Box */}
        <View style={styles.searchWrap}>
          <Text style={styles.icon}>🔍</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor={Global.colors.gray}
          />
        </View>

        {/* Filter Button */}
        <Pressable
          style={({ pressed }) => [styles.filterBtn, pressed && styles.pressed]}
        >
          <Text style={styles.filterText}>⚙️</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",

    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    // elevation (Android)
    elevation: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  searchWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Global.colors.lightGray,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
  },

  icon: {
    fontSize: 16,
    color: Global.colors.gray,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Global.colors.dark,
    // fontFamily: "JetBrainsMono-Regular",
  },

  filterBtn: {
    marginLeft: 10,
    backgroundColor: Global.colors.dark,
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  filterText: {
    fontSize: 18,
    color: "#fff",
  },

  pressed: {
    transform: [{ scale: 0.92 }],
  },
});
