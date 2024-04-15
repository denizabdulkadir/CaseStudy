import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Colors } from "../constants/color";
import SearchBox from "../components/SearchBox";
import MainButton from "../components/MainButton";
import SecondaryButton from "../components/SecondaryButton";
import FilterModal from "../components/FilterModal";
import { filterProducts, getAllBrands, getAllModels } from "../utils/functions";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [isClearFilter, setIsClearFilter] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products`);
        const data = await response.json();

        if (data.length > 0) {
          setAllProducts(data);
          setBrands(getAllBrands(searchParam && products.length ? products : data));
          setModels(getAllModels(searchParam && products.length ? products : data));
        }
      } catch (error) {
        console.error("Ürünleri çekerken bir hata oluştu:", error);
      }
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (searchParam) {
        searchProducts(searchParam);
      } else {
        setProducts([]);
        fetchProducts();
      }
    }, 500);
    return () => {
      clearTimeout(interval);
    };
  }, [searchParam]);

  const fetchProducts = async () => {
    if (!hasMore) return;
    try {
      const response = await fetch(
        `https://5fc9346b2af77700165ae514.mockapi.io/products?page=${page}&limit=12`
      );
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false);
      } else {
        // const sortedData = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setProducts((prevProducts) => [...prevProducts, ...data]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (name) => {
    setPage(1);
    setHasMore(true);
    try {
      const response = await fetch(
        `https://5fc9346b2af77700165ae514.mockapi.io/products?name=${name}`
      );
      const data = await response.json();

      if (data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.error("Ürünleri çekerken bir hata oluştu:", error);
    }
  };

  const filterHandler = (options) => {
    if (options.brands.length > 0 || options.models.length > 0 || options.sortOption > 0) {
      const filteredAndSortedProducts = filterProducts(
        searchParam && products.length > 0 ? products : allProducts,
        options
      );
      if (filteredAndSortedProducts.length > 0) {
        setProducts(filteredAndSortedProducts);
      }
      setIsClearFilter(true);
    }
  };

  const onPressFilterButton = () => {
    if (!isClearFilter) {
      setFilterModalVisible(true);
      setPage(1);
      setHasMore(true);
    } else {
      setIsClearFilter(false);
      setProducts([]);
      searchParam && products.length ? searchProducts(searchParam) : fetchProducts();
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.main} />;
  }

  return (
    <View style={styles.container}>
      <SearchBox placeholder={"Search"} value={searchParam} onChangeText={setSearchParam} />
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filters:</Text>
        <SecondaryButton
          title={isClearFilter ? "Clear Filter" : "Select Filter"}
          onPress={onPressFilterButton}
          titleStyle={isClearFilter ? { color: "red" } : null}
        />
      </View>
      {products.length === 0 && searchParam.length > 0 && <Text>Product not found!</Text>}
      {products.length > 0 && (
        <ProductList
          products={products}
          onEndReached={searchParam || isClearFilter ? null : fetchProducts}
        />
      )}
      <FilterModal
        modalVisible={filterModalVisible}
        onCloseModal={() => setFilterModalVisible(false)}
        brands={brands}
        models={models}
        onGetFilterOptions={filterHandler}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", alignItems: "center", gap: 10 },
  filterContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterText: { fontSize: 20, fontWeight: "500" },
});
