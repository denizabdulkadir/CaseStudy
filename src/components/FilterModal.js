import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, Pressable, Dimensions, ScrollView } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import MainButton from "./MainButton";
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SORTVALUES = [
  { key: "1", value: "Old to new" },
  { key: "2", value: "New to old" },
  { key: "3", value: "Price high to low" },
  { key: "4", value: "Price low to high" },
];

const FilterModal = ({ modalVisible, onCloseModal, brands, models, onGetFilterOptions }) => {
  const [sortOption, setSortOption] = useState(-1);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [selectedModels, setSelectedModels] = React.useState([]);

  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}
    >
      <View style={[styles.modalContainer]}>
        <View style={[styles.innerContainer]}>
          <View style={[styles.header]}>
            <Text style={[styles.title]}>Filter</Text>
            <Pressable
              onPress={onCloseModal}
              style={({ pressed }) => [pressed && { opacity: 0.7 }]}
            >
              <MaterialCommunityIcons name="close" size={32} color="black" />
            </Pressable>
          </View>

          <ScrollView style={styles.filterItems} contentContainerStyle={styles.filterItemsContent}>
            <Text style={styles.subTitle}>Sort By</Text>

            <SelectList
              setSelected={(key) => setSortOption(key)}
              data={SORTVALUES}
              save="key"
              search={false}
            />

            <Text style={styles.subTitle}>Brand</Text>
            <MultipleSelectList
              setSelected={(val) => setSelectedBrands(val)}
              data={brands}
              save="value"
            />
            <Text style={styles.subTitle}>Model</Text>
            <MultipleSelectList
              setSelected={(val) => setSelectedModels(val)}
              data={models}
              save="value"
            />
          </ScrollView>
          <View style={styles.filterItems}>
            <MainButton
              title={"Apply"}
              onPress={() => {
                onGetFilterOptions({ brands: selectedBrands, models: selectedModels, sortOption });
                onCloseModal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000099",
  },

  innerContainer: {
    width: windowWidth,
    backgroundColor: "white",
    maxHeight: windowHeight * 0.9,
    gap: 10,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  title: { fontSize: 28 },
  subTitle: { fontSize: 18 },
  filterItems: { paddingHorizontal: 25 },
  filterItemsContent: { gap: 10 },
});
