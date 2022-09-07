import BrandIco from "@/components/icons/BrandIco";
import InstitutionIco from "@/components/icons/InstitutionIco";
import MailIco from "@/components/icons/MailIco";
import PhoneIco from "@/components/icons/PhoneIco";
import UserIco from "@/components/icons/UserIco";
import InputField from "@/components/InputField";
import { Checkbox } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Radio } from "antd";
import React, { useState } from "react";

const Registration = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  return (
    <main className="wrapper" style={{ minWidth: "380px" }}>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 py-10">
        <section className="w-full lg:w-4/12 flex flex-col-reverse lg:flex-col items-center  ">
          <div className="w-full h-full">
            <Image
              src="/static/images/registration_img.png"
              layout="responsive"
              width="100%"
              height="100"
              alt=""
            />
          </div>
          <p className="text-2xl pt-6">
            Already have an Account?{" "}
            <Link href="/" passHref>
              <a className="text-primary font-semibold">Login</a>
            </Link>
          </p>
        </section>
        <section className="w-full lg:w-8/12">
          <div className="sm:flex items-center gap-8">
            <span>
              <BrandIco />
            </span>
            <div className="text-gray">
              <h3 className="text-2xl font-bold p-0">The Awesome Company</h3>
              <p className="text-base">
                The next generation awesomeness is here
              </p>
            </div>
          </div>

          <div className="py-16">
            <h1 className="text-4xl font-black text-secondary">
              Create a New Account
            </h1>
            <span className="block w-28 h-[5px] bg-primary mt-3"></span>
          </div>

          <form className="grid gap-5">
            <div className="yo">
              <Radio.Group
                // onChange={onChange}
                // value={value}
                size="large"
                className="flex justify-start gap-5"
              >
                <Radio value="buy" style={{ outline: "red" }}>
                  <span className="pl-1 font-semibold tracking-wide text-lg">
                    Individual
                  </span>
                </Radio>
                <Radio value="sell" style={{ outline: "red" }}>
                  <span className="pl-1 font-semibold tracking-wide text-lg">
                    Institute/Organization
                  </span>
                </Radio>
              </Radio.Group>
            </div>

            <InputField
              label="Name"
              name="name"
              Icon={<UserIco />}
              placeholder="Type your full name here"
              required={true}
            />
            <InputField
              label="Type of Institution/Organization"
              type="select"
              Icon={<InstitutionIco />}
              name="institutionType"
              placeholder="Choose one"
              required={true}
            />
            <InputField
              label="Institution/Organization"
              type="select"
              Icon={<InstitutionIco />}
              name="institution"
              placeholder="Choose one"
              required={true}
            />
            <InputField
              label="Mobile Number"
              type="number"
              Icon={<PhoneIco />}
              name="mobileNumber"
              placeholder="Type your 11-digit Mobile Phone Number"
              required={true}
            />
            <InputField
              label="Email Address"
              type="email"
              name="email"
              Icon={<MailIco />}
              placeholder="Type your email address"
            />

            <div>
              <Checkbox
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="flex items-center gap-3 text-lg"
              >
                I agree to the
                <Link href="/">
                  <a className="text-primary font-bold"> Terms of Use</a>
                </Link>
                <span> and </span>
                <Link href="/">
                  <a className="text-primary font-bold">Privacy Policy</a>
                </Link>
              </Checkbox>
            </div>

            <div>
              <button type="submit" className="btn-primary mt-4">
                Create Account
              </button>
            </div>
          </form>
        </section>
      </div>
      <p className="py-5 text-center text-gray-light text-base">
        © <span className="font-bold">Copyright</span> 2020-2022 The Awesome
        Company
      </p>
    </main>
  );
};

export default Registration;
