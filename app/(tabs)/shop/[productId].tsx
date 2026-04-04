import DetailsImage from "@/components/shop/details/detailsImage";
import Footer from "@/components/shop/details/footer";
import Topbar from "@/components/shop/details/topbar";
import ProductsData from "@/data/Products.json";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function ProductDetails() {
  const { productId } = useLocalSearchParams();
  const [open, setOpen] = useState(true);

  const productData = ProductsData.find(
    (product) => String(product.id) === productId,
  );

  return (
    <View style={styles.container}>
      {/* 🔥 Image Section */}
      <DetailsImage imageSrc={productData?.img} />

      {/* 🔥 Topbar overlay */}
      <Topbar />

      {/* 🔥 Content Section */}

      {/* 🔥 Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 120, // 🔥 footer space
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
