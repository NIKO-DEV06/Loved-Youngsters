import dev1 from "@/assets/dev1.png";
import dev2 from "@/assets/dev2.png";
import dev3 from "@/assets/dev3.png";
import dev4 from "@/assets/dev4.png";
import dev5 from "@/assets/dev5.png";
import dev6 from "@/assets/dev6.png";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <section className="min-h-screen pt-[10rem] md:pt-[3rem] grid place-items-center">
      <div className="">
        <div className="flex flex-col  items-center justify-center w-[330px]">
          <Image src={dev1} alt="ly-devotional" className="w-[330px]" />
          <div>
            <p>LY Devotionals</p>
            <p>
              With practical and relatable stories, we bring to life the Gospel
              and the love of God to teenagers.
            </p>
            <Link
              href={"https://selar.co/m/lovedyoungsters"}
              className="underline"
            >
              GET NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
