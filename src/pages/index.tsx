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
      {/* ----------------- Header section ----------------- */}
      <header className="home_hero pt-36 pb-16 lg:h-[90vh] flex items-center">
        <div className="wrapper">
          {/* If this is slider */}
          {heroData.map((item, i) => {
            return (
              <div
                key={i}
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                <div className="w-full h-full flex flex-col items-center lg:items-start">
                  <div className="grid gap-4 mb-8">
                    <h1 className="heading text-center lg:text-left text-white tracking-wide">
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

      {/* ----------------- Glimpses section ----------------- */}
      <section className="glimpses_section py-20">
        <div className="text-center grid gap-4 pb-10">
          <h2 className="subheading">Glimpses</h2>
          <p className="font-normal text-2xl">
            Our workplace can be best previewed in photos
          </p>
        </div>
        <div className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="w-full h-full rounded-lg-img">
            <Image
              src="/static/images/glimpses_left_img.png"
              layout="responsive"
              width="100%"
              height="103%"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="w-full h-full grid gap-3 md:gap-5 rounded-lg-img">
            <Image
              src="/static/images/glimpses_right1.png"
              layout="responsive"
              width="100%"
              height="50%"
              objectFit="cover"
              alt=""
            />
            <Image
              src="/static/images/glimpses_right2.png"
              layout="responsive"
              width="100%"
              height="50%"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ----------------- Team section ----------------- */}
      <section className="relative w-full h-full mt-28">
        <div className="absolute -top-32 left-0 w-full z-10">
          <div className="text-center">
            <Image
              src="/static/images/team_batch.png"
              width={360}
              height={400}
              alt=""
            />
          </div>
        </div>
        <div className="team_section pt-40 flex justify-center items-center">
          <div className="text-center grid gap-4 py-5">
            <h3 className="subheading text-white">An Awesome Team</h3>
            <p className="w-4/5 md:w-3/4 m-auto text-white">
              Rapidiously actualize client-based products before out-of-the-box
              leadership skills.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- Team section ----------------- */}
      <footer></footer>
    </DefaultLayout>
  );
};

export default Home;
