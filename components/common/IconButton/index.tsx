import { Container } from "./styles";
import { buildingMap } from "./icons";
import Icon from "../Icon";
type IconType = typeof buildingMap;
export type IconPropType = keyof IconType;
type Props = {
  iconType: IconPropType;
  text: string;
  isActive: boolean;
  handleClick: () => void;
};

const IconButton = ({ iconType, text, isActive, handleClick }: Props) => {
  return (
    <Container isActive={isActive} onClick={() => handleClick()}>
      <Icon className="iconButton">
        {buildingMap[iconType] && buildingMap[iconType]}
      </Icon>
      <span>{text}</span>
    </Container>
  );
};

export default IconButton;
