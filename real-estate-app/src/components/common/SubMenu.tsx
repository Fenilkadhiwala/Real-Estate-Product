import {
  SuratAreas,
  TenantsList,
  BuyersList,
  DashboardList,
  Constants,
} from "../../utility/constants";
import { useState } from "react";
import "./styles/style.css";

const SubMenu = ({ hoveredNavItem }: any) => {
  const [propertyTitle, setPropertyTitle] = useState("Property");
  const [isHover, setIsHover] = useState(false);
  const [hoveredProperty, setHoveredProperty] = useState("");

  const handleTypeOfPlace = (typeOfPlace: any) => {
    setIsHover(true);
    if (typeOfPlace === Constants.PGColiving) {
      typeOfPlace = "PG";
    }
    setPropertyTitle(typeOfPlace);
    setHoveredProperty(typeOfPlace);
  };
  const handleTypeOfPlaceToProperty = () => {
    isHover ? setPropertyTitle(hoveredProperty) : setPropertyTitle("Property");
    setIsHover(false);
  };

  const renderSubMenu = (title: string, list: string[]) => (
    <div className="grid grid-cols-12 w-[530px] h-[330px] mt-8 text-black sub-menu">
      <div className="bg-slate-100 col-span-4 pt-6 pl-6 text-gray-600">
        <span className="text-[0.9rem] font-semibold">{title}</span>
        <ul
          onMouseLeave={handleTypeOfPlaceToProperty}
          className="mt-3 text-[0.9rem]"
        >
          {list.map((typeOfPlace, index) => (
            <li
              onMouseOver={() => handleTypeOfPlace(typeOfPlace)}
              onMouseLeave={handleTypeOfPlaceToProperty}
              className="pb-2"
              key={index}
            >
              {typeOfPlace}
            </li>
          ))}
        </ul>
      </div>
      <div
        onMouseLeave={handleTypeOfPlaceToProperty}
        className="col-span-8 ml-9 pt-6"
      >
        <ul>
          {SuratAreas.map((area, index) => (
            <li className="hover:bg-slate-50 p-1 text-sm" key={index}>
              {propertyTitle} in {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderDashboardSubMenu = () => (
    <div className="mt-8 w-[200px] border text-black sub-menu">
      <ul>
        {DashboardList.map((dashboard, index) => (
          <>
            <li key={index} className="px-4 py-3 hover:bg-slate-50">
              {dashboard}
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );

  const getSubMenuConditionally = () => {
    switch (hoveredNavItem) {
      case Constants.ForTenants:
        return renderSubMenu("RENT A HOME", TenantsList);
      case Constants.ForBuyers:
        return renderSubMenu("BUY A HOME", BuyersList);
      case Constants.ForBrokers:
        return renderSubMenu("BROKERS", TenantsList);
      case Constants.YourDashboard:
        return renderDashboardSubMenu();
      default:
        return null;
    }
  };
  return <>{getSubMenuConditionally()}</>;
};

export default SubMenu;
