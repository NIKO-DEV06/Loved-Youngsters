import ContactPage from "@/components/contactPage/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loved Youngsters | Contact Us",
  description: "A family loved to love",
  keywords: ["loved youngsters", "loved", "ly", "simi", "araolouwa"],
};

const page = () => {
  return <ContactPage />;
};

export default page;
