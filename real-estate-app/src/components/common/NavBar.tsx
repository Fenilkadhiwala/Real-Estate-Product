import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp, mdiAccountCircle } from "@mdi/js";
import { NavbarItems } from "../../utility/constants";
import SubMenu from "./SubMenu";
import "./styles/style.css";

const NavBar = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState("");
  const [navItemIcon, setNavItemIcon] = useState(mdiChevronDown);

  const handleNavbarTitle = (item: string) => {
    setHoveredNavItem(item);
  };

  const setProfileIconToUp = () => {
    setNavItemIcon(mdiChevronUp);
  };

  const setProfileIconToDown = () => {
    setNavItemIcon(mdiChevronDown);
  };

  return (
    <>
      <div className="py-5 flex bg-red-700 text-white">
        <div className="font-varela font-semibold text-2xl pl-6 cursor-pointer">
          MyHomeHunt
        </div>
        <div className="flex flex-row justify-evenly w-[100vw]">
          <div className="mx-10">
            <ul className="flex flex-row space-x-10 pt-1 cursor-pointer">
              {NavbarItems?.map((item, index) => (
                <div key={index}>
                  <li
                    onMouseOver={() => handleNavbarTitle(item)}
                    className="hover:border-b-white hover:border-b flex flex-row parent-li"
                  >
                    {item} <Icon path={mdiChevronDown} size={1} />
                    <SubMenu hoveredNavItem={hoveredNavItem} />
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div
            className="flex flex-row mt-1 parent-li"
            onMouseOver={setProfileIconToUp}
            onMouseLeave={setProfileIconToDown}
          >
            <Icon path={mdiAccountCircle} size={1} />
            <Icon path={navItemIcon} size={1} />
            <div className="mt-8 w-[170px] border sub-menu p-4 cursor-pointer rounded-md">
              <ul>
                <li className="text-[#0078DB] font-semibold pb-1">
                  LOGIN/REGISTER
                </li>
                <li className="text-black">My Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
