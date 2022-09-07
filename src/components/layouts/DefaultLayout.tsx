import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "../Footer";

interface PropType {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout: React.FC<PropType> = ({ children }) => {
  return (
    <div style={{ minWidth: "380px" }}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
