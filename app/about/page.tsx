import AboutPage from "@/components/aboutPage/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loved Youngsters | About",
  description: "A family loved to love",
  keywords: ["loved youngsters", "loved", "ly", "simi", "araolouwa"],
};

const page = () => {
  return <AboutPage />;
};

export default page;
