import ProductsPage from "@/components/productsPage/ProductsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loved Youngsters | Journey",
  description: "A family loved to love.",
  keywords: ["loved youngsters", "loved", "ly", "simi", "araolouwa"],
};

const page = () => {
  return <ProductsPage />;
};

export default page;
