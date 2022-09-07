import Link from "next/link";
import React from "react";
import EmailIco from "./icons/EmailIco";
import FacebookIco from "./icons/FacebookIco";
import LinkedInIco from "./icons/LinkedInIco";
import TwitterIco from "./icons/TwitterIco";

const footerNavData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Privacy Policy",
    link: "/registration",
  },
  {
    label: "Disclaimer",
    link: "/registration",
  },
  {
    label: "Contact us",
    link: "/registration",
  },
];

const Footer = () => {
  return (
    <footer className="relative pt-36 pb-5 bg-gray">
      {/* ----------- Newsletter ----------- */}
      <div className="w-full absolute -top-20">
        <div className="wrapper">
          <div className="relative newsletter w-full sm:w-11/12 md:w-5/6 lg:w-4/6 m-auto text-center bg-white p-10 rounded-xl">
            <h3 className="subheading font-bold text-gray">Newsletter</h3>
            <form className="w-full md:w-3/4 mx-auto mt-10 mb-2 h-11 relative flex items-center justify-between border border-[#999999] p-px rounded-full">
              <span className="absolute pl-4">
                <EmailIco />
              </span>
              <input
                type="email"
                placeholder="Email Address"
                className="block rounded-full w-10/12 h-full pl-16"
              />
              <button type="submit" className="btn-secondary min-w-fit">
                SUBSCRIBE
              </button>
            </form>
            <p className="text-[#666666]">
              We will send occasional newsletter to keep you informed
            </p>
            <span className="newsletter_bottom_shadow absolute left-0 md:left-[-5%] xl:left-[-10%] -bottom-6 block w-full md:w-[110%] xl:w-[120%] h-6"></span>
          </div>
        </div>
      </div>

      {/* ----------- Footer navigation ----------- */}
      <div className="wrapper flex items-center flex-col-reverse lg:flex-row justify-between gap-5 pt-14 sm:pt-10">
        <p className="text-center lg:text-left lg:order-none text-lg text-white">
          © 2022 Awesome Company Inc.
        </p>
        <nav className="text-white">
          <ul className="flex flex-wrap justify-center items-center">
            {footerNavData.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`flex items-center ${
                    i !== footerNavData.length - 1 &&
                    "after:content-[''] after:w-px after:h-3.5 after:rounded-full after:bg-white"
                  }`}
                >
                  <Link href="">
                    <a className="block px-4">{item.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="flex items-center justify-end gap-3 lg:gap-5">
          <Link href="/" passHref>
            <FacebookIco />
          </Link>
          <Link href="/" passHref>
            <TwitterIco />
          </Link>
          <Link href="/" passHref>
            <LinkedInIco />
          </Link>
          <span className="block w-8 h-px bg-white"></span>
          <Link href="/" passHref>
            <a className="uppercase text-lg text-white">Follow Us</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
