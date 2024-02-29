import ContributePage from "@/components/contributePage/ContributePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loved Youngsters | Contribute",
  description: "A family loved to love.",
  keywords: ["loved youngsters", "loved", "ly", "simi", "araolouwa"],
};
const page = () => {
  return <ContributePage />;
};

export default page;
