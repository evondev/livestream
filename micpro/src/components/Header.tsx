import React from "react";
import Image from "next/image";
import Link from "next/link";
const menuLinks = [
  "Home",
  "Services",
  "Expertise",
  "Cases",
  "Pricing",
  "Company",
];
function Header() {
  return (
    <header className="pt-[30px] mb-11">
      <div className="l-container flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-xl flex items-center gap-2.5"
        >
          <Image src="/logo.svg" alt="MicPro" width={36} height={36}></Image>
          <span>MicPro</span>
        </Link>
        <ul className="flex items-center justify-center gap-10">
          {menuLinks.map((link) => (
            <li key={link}>
              <Link href={"#"} className="font-medium">
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <button className="font-medium leading-normal py-[18px] px-[50px] rounded-full text-white bg-primary">
          Start a Project
        </button>
      </div>
    </header>
  );
}

export default Header;
