import DetailsImage from "@/components/shop/details/detailsImage";
import Footer from "@/components/shop/details/footer";
import Topbar from "@/components/shop/details/topbar";
import ProductsData from "@/data/Products.json";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const tabs = [
  {
    key: "details",
    label: "Details",
    content:
      "Sana is crafted to give you a premium sleep experience with soft memory foam, light-blocking design, and breathable materials that feel great all night.",
  },
  {
    key: "materials",
    label: "Materials",
    content:
      "The mask uses a blend of ultra-soft fabric, memory foam padding, and gentle silicone sealing for a comfortable fit that keeps light out without pressure.",
  },
  {
    key: "reviews",
    label: "Reviews",
    content:
      "Rated 4.9 by customers. People love its lightweight fit, blackout performance, and the way it stays comfortable through deeper sleep cycles.",
  },
];

export default function ProductDetails() {
  const { productId } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState("details");
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: "flex" },
      });
    };
  }, [navigation]);

  const productData = ProductsData.find(
    (product) => String(product.id) === productId,
  );

  const activeTabData = tabs.find((tab) => tab.key === activeTab);

  return (
    <View style={styles.container}>
      <DetailsImage imageSrc={productData?.img} />

      <Topbar />

      <ScrollView
        style={styles.contentWrapper}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{productData?.name ?? "Product Name"}</Text>
        <Text style={styles.description} numberOfLines={4}>
          {productData?.desc ??
            "This product helps you relax and enjoy everyday comfort with premium design and materials."}
        </Text>

        <View style={styles.tabRow}>
          {tabs.map((tab) => (
            <Pressable
              key={tab.key}
              style={[
                styles.tabButton,
                activeTab === tab.key && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text
                style={[
                  styles.tabLabel,
                  activeTab === tab.key && styles.activeTabLabel,
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.tabContent}>
          <Text style={styles.tabContentText}>{activeTabData?.content}</Text>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentWrapper: {
    marginTop: 350,
  },

  content: {
    padding: 20,
    paddingBottom: 140,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#242424",
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: "#626262",
    lineHeight: 24,
    marginBottom: 20,
  },

  tabRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },

  activeTabButton: {
    backgroundColor: "#f26363",
  },

  tabLabel: {
    color: "#828282",
    fontWeight: "700",
  },

  activeTabLabel: {
    color: "#fff",
  },

  tabContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
  },

  tabContentText: {
    fontSize: 15,
    color: "#4b4b4b",
    lineHeight: 22,
  },
});
