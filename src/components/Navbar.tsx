import Image from "next/image";
import Link from "next/link";
import React from "react";
import BrandIco from "./icons/BrandIco";

const Avatar = () => <h1>avatar</h1>;

const Navbar = () => {
  return (
    <div className="wrapper py-10 flex justify-between items-center">
      <Link href="/" passHref>
        <BrandIco />
      </Link>
    </div>
  );
};

export default Navbar;
