import { createBrowserRouter } from "react-router";
import ProductDetails from "../Pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductDetails></ProductDetails>
  },
]);
