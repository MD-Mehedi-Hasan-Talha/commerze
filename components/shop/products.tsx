import ProductsData from "@/data/Products.json";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Products() {
  const renderItem = ({ item }) => <SingleProduct product={item} />;

  return (
    <FlatList
      data={ProductsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.grid}
      ListEmptyComponent={
        <Text style={styles.noResults}>No products found</Text>
      }
    />
  );
}

function SingleProduct({ product }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push(`/shop/${product.id}`)}
    >
      {/* Best Badge */}
      {product.bestPrice && (
        <View style={styles.bestBadge}>
          <Text style={styles.bestBadgeText}>Best price</Text>
        </View>
      )}

      {/* Normal Badge */}
      {product.badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.badge}</Text>
        </View>
      )}

      {/* Image */}
      <View style={styles.imgBox}>
        {product.img ? (
          <Image
            source={{ uri: product.img }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Text style={{ fontSize: 40 }}>📦</Text>
        )}
      </View>

      {/* Info */}
      <View style={styles.cardInfo}>
        <Text style={styles.cardPrice}>
          ${product.price.toFixed(2)}
          {product.oldPrice && (
            <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
          )}
        </Text>

        <Text numberOfLines={1} style={styles.cardTitle}>
          {product.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 110,
  },

  card: {
    flex: 1,
    margin: 9,
    position: "relative",
  },

  imgBox: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  image: {
    width: "85%",
    height: "85%",
  },

  badge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "green",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 1,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#fff",
  },

  bestBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#222",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 1,
  },

  bestBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#fff",
  },

  cardInfo: {
    marginTop: 10,
    paddingHorizontal: 4,
  },

  cardPrice: {
    fontWeight: "700",
    fontSize: 15,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "gray",
    fontSize: 12,
  },

  cardTitle: {
    color: "gray",
    fontSize: 12,
    marginTop: 3,
  },

  noResults: {
    textAlign: "center",
    paddingVertical: 60,
    fontSize: 14,
    color: "gray",
    width: "100%",
  },
});
