import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Topbar() {
  return (
    <SafeAreaView style={styles.topBar}>
      <View style={styles.row}>
        <Pressable style={styles.circleBtn}>
          <Text style={styles.iconText}>←</Text>
        </Pressable>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable style={styles.circleBtn}>
            <Text style={styles.iconText}>♡</Text>
          </Pressable>
          <Pressable style={styles.circleBtn}>
            <Text style={styles.iconText}>📤</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconText: {
    fontSize: 18,
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});
