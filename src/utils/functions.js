export const filterProducts = (products, filterOptions) => {
  let filteredProducts = [...products];

  if (filterOptions.brands && filterOptions.brands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filterOptions.brands.includes(product.brand)
    );
  }

  if (filterOptions.models && filterOptions.models.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filterOptions.models.includes(product.model)
    );
  }

  const sortOptions = {
    1: (a, b) => new Date(a.createdAt) - new Date(b.createdAt), // Old to new
    2: (a, b) => new Date(b.createdAt) - new Date(a.createdAt), // New to old
    3: (a, b) => parseFloat(b.price) - parseFloat(a.price), // Price high to low
    4: (a, b) => parseFloat(a.price) - parseFloat(b.price), // Price low to high
  };

  if (filterOptions.sortOption) {
    filteredProducts.sort(sortOptions[filterOptions.sortOption]);
  }

  return filteredProducts;
};

export const getAllBrands = (products) => {
  const brands = products.map((product) => {
    return { key: product.id, value: product.brand };
  });
  const uniqueBrands = brands.reduce((acc, item) => {
    if (!acc.some((accItem) => accItem.value === item.value)) {
      acc.push({ key: item.key, value: item.value });
    }
    return acc;
  }, []);
  return uniqueBrands;
};

export const getAllModels = (products) => {
  const models = products.map((product) => {
    return { key: product.id, value: product.model };
  });
  const uniqueModels = models.reduce((acc, item) => {
    if (!acc.some((accItem) => accItem.value === item.value)) {
      acc.push({ key: item.key, value: item.value });
    }
    return acc;
  }, []);
  return uniqueModels;
};
