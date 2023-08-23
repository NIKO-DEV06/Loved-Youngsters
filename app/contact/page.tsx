import ContactPage from "@/components/contactPage/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loved Youngsters | Contact Us",
  description: "A family of love bonded by the love of Christ.",
  keywords: ["loved youngsters", "loved", "ly", "simi", "araolouwa"],
};

const page = () => {
  return <ContactPage />;
};

export default page;
