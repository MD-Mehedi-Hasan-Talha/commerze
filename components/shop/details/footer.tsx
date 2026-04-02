import GlobalStyle from "@/app/global-style";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.detailFooter}>
      <View>
        <Text style={styles.oldPrice}>123</Text>
        <Text style={styles.newPrice}>43523</Text>
      </View>

      <View style={styles.qtyRow}>
        <Pressable style={styles.qtyBtn}>
          <Text style={styles.qtyText}>-</Text>
        </Pressable>

        <Text style={styles.qtyNum}>1</Text>

        <Pressable style={styles.qtyBtn}>
          <Text style={styles.qtyText}>+</Text>
        </Pressable>
      </View>

      <Pressable style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add to cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  detailFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: "#f5f5f5",
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: GlobalStyle.colors.gray,
    fontSize: 13,
  },

  newPrice: {
    fontSize: 24,
    fontWeight: "700",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#eee",
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",

    marginHorizontal: 6,
  },

  qtyText: {
    fontSize: 18,
    fontWeight: "600",
  },

  qtyNum: {
    fontSize: 15,
    fontWeight: "700",
    minWidth: 20,
    textAlign: "center",
  },

  addBtn: {
    backgroundColor: GlobalStyle.colors.accent,
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 14,
  },

  addBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
