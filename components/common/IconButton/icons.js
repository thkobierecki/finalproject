import {
  MdManageSearch,
  MdLockOpen,
  MdLockOutline,
  MdOutlineShoppingCart,
  MdOutlineCheckBox,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { IoRocketOutline, IoBusinessOutline } from "react-icons/io5";
import { BsHouseDoor, BsBuilding } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { GiChemicalDrop } from "react-icons/gi";
export const buildingMap = {
  earlyBuilding: <BsHouseDoor />,
  growthBuilding: <BiBuildingHouse />,
  establishedBuilding: <BsBuilding />,
  corpoBuilding: <IoBusinessOutline />,
  jobCorporation: <MdOutlineBusinessCenter />,
  check: <MdOutlineCheckBox />,
  chemistry: <GiChemicalDrop />,
  closedLock: <MdLockOutline />,
  ecommerce: <MdOutlineShoppingCart />,
  house: <BsHouseDoor />,
  openLock: <MdLockOpen />,
  rocket: <IoRocketOutline />,
  search: <MdManageSearch />,
};
