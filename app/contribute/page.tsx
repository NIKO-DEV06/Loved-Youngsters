import ContributePage from "@/components/contributePage/ContributePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loved Youngsters | Contribute",
  description: "A family of love bonded by the love of Christ.",
  keywords: ["loved youngsters", "loved", "ly", "simi", "araolouwa"],
};
const page = () => {
  return <ContributePage />;
};

export default page;
