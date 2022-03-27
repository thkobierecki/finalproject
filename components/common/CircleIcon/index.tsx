import styled from "styled-components";
import Icon from "../Icon";
import { IoLocationSharp, IoLogoReact } from "react-icons/io5";
import {
  MdOutlineAttachMoney,
  MdOutlineComputer,
  MdOutlineBeachAccess,
} from "react-icons/md";
const iconMap = {
  location: <IoLocationSharp />,
  salary: <MdOutlineAttachMoney />,
  mainTech: <MdOutlineComputer />,
  techSkills: <IoLogoReact />,
  isRemote: <MdOutlineBeachAccess />,
};
type IconMapType = typeof iconMap;
export type IconsType = keyof IconMapType;
const CircleIcon = ({ type }: { type: IconsType }) => {
  return (
    <IconWrapper>
      <Icon className="icon">{iconMap[type]}</Icon>
    </IconWrapper>
  );
};

export default CircleIcon;

const IconWrapper = styled.div`
  height: 44px;
  margin-top: -2px;
  width: 44px;
  border-radius: 50%;
  background: rgb(224, 247, 250);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: 3px solid rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 4px 7px 0px;

  .icon {
    width: 24px;
    fill: rgb(77, 208, 225);
  }
`;
