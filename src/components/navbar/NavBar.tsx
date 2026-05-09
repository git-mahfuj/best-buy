import React from "react";
import NavLogo from "../ui/logo";
import NavLinks from "./NavLinks";
import NavItems from "./NavItems";
const NavBar = () => {
  return (
    <div className="flex items-center justify-around">
      <NavLogo />
      <NavLinks />
      <NavItems />
    </div>
  );
};

export default NavBar;
