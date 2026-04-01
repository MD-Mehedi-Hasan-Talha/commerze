import { Redirect } from "expo-router";

export default function NotFoundRedirectToShopPage() {
  return <Redirect href="/shop" />;
}
