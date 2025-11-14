type Product = {
  productId: number;
  name: string;
  description: string;
  imageUrls: string[];
  price: number;
  sizes: string[];
  colors: string[];
  sku: string;
  stock: number;
};

const product1: Product = {
  productId: 1,
  name: "Product 1",
  description: "This is a product",
  imageUrls: ["image1.jpg", "image2.jpg"],
  price: 100,
  sizes: ["S", "M", "L"],
  colors: ["Red", "Blue"],
  sku: "SKU123",
  stock: 10,
};
