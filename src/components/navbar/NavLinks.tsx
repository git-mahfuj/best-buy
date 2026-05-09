import Link from "next/link";
import React from "react";
import Heading from "../ui/typography";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-6">
      {["Home", "Shop", "Blog", "HotDeal"].map((i, index) => (
        <div key={index}>
          <Link href={"/"}>
            <Heading variant="h4">{i}</Heading>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
