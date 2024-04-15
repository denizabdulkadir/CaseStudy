import { filterProducts } from "./src/utils/functions";

describe("filterProducts", () => {
  it("should filter products by brand and model", () => {
    const products = [
      { brand: "Lamborghini", model: "Roadster", price: "500000", createdAt: "2023-01-01" },
      { brand: "Ferrari", model: "Taurus", price: "600000", createdAt: "2023-02-01" },
      { brand: "Lamborghini", model: "Taurus", price: "700000", createdAt: "2023-03-01" },
    ];

    const filterOptions = {
      brands: ["Lamborghini"],
      models: ["Roadster"],
    };

    const result = filterProducts(products, filterOptions);

    expect(result).toEqual([
      { brand: "Lamborghini", model: "Roadster", price: "500000", createdAt: "2023-01-01" },
    ]);
  });

  it("should sort products by price high to low", () => {
    const products = [
      { brand: "Lamborghini", model: "Roadster", price: "500000", createdAt: "2023-01-01" },
      { brand: "Ferrari", model: "Taurus", price: "600000", createdAt: "2023-02-01" },
      { brand: "Lamborghini", model: "Taurus", price: "700000", createdAt: "2023-03-01" },
    ];

    const filterOptions = {
      sortOption: 3,
    };

    const result = filterProducts(products, filterOptions);

    expect(result).toEqual([
      { brand: "Lamborghini", model: "Taurus", price: "700000", createdAt: "2023-03-01" },
      { brand: "Ferrari", model: "Taurus", price: "600000", createdAt: "2023-02-01" },
      { brand: "Lamborghini", model: "Roadster", price: "500000", createdAt: "2023-01-01" },
    ]);
  });
});
