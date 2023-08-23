import ProductsPage from "@/components/productsPage/ProductsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loved Youngsters | Journey",
  description: "A family of love bonded by the love of Christ.",
  keywords: ["loved youngsters", "loved", "ly", "simi", "araolouwa"],
};

const page = () => {
  return <ProductsPage />;
};

export default page;
