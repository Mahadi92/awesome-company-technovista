import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface HeroData {
  heading: string;
  content: string;
  btn?: {
    label: string;
    link: string;
  };
  img: string;
}

const heroData: HeroData[] = [
  {
    heading: "A Venture with Passion",
    content:
      "Continually whiteboard viral ROI with functional e-services. Enthusiastically fabricate equity invested communities rather than cross-media markets.",
    btn: {
      label: "GET QUOTE",
      link: "/",
    },
    img: "/static/images/hero_img.png",
  },
];

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <header className="home_hero pt-36 pb-16 lg:h-[90vh] flex items-center">
        <div className="wrapper">
          {heroData.map((item, i) => {
            return (
              <div
                key={i}
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                <div className="w-full h-full flex flex-col items-center lg:items-start">
                  <div className="grid gap-4 mb-8">
                    <h1 className="text-center lg:text-left text-white font-bold tracking-wide">
                      {item.heading}
                    </h1>
                    <p className="text-center lg:text-left tracking-widest text-white text-lg font-light">
                      {item.content}
                    </p>
                  </div>
                  <Link href={`${item.btn?.link}`} passHref>
                    <a className="btn-tertiary">{item.btn?.label}</a>
                  </Link>
                </div>
                <div className="w-full h-full flex justify-center lg:justify-end items-center">
                  <Image src={item.img} width={400} height={379} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </DefaultLayout>
  );
};

export default Home;
