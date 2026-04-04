import Category from "@/components/shop/category";
import Products from "@/components/shop/products";
import SearchBar from "@/components/shop/searchbar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ShopScreen() {
  return (
    <SafeAreaView>
      <SearchBar />
      <Category />
      <Products />
    </SafeAreaView>
  );
}
