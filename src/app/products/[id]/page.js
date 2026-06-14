import { getProductById } from "@/api/products";
import ProductDetails from "../_components/ProductDetails";

export const metadata = {
  title: "Product Details",
};

const ProductDetailsPage = async ({ params }) => {
  const product = await getProductById(params.id);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;