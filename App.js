import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductsDetailScreen from "./src/screens/ProductsDetailScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}> */}
        {/* <ProductsScreen /> */}
        {/* <ProductsDetailScreen /> */}
        {/* <ShoppingCart /> */}
        <Navigation />
        <StatusBar style="auto" />
      {/* </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
