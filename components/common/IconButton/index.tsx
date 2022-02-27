import { Container } from "./styles";
import { buildingMap } from "./icons";
import Icon from "../Icon";
type IconType = typeof buildingMap;
type Props = {
  iconType: keyof IconType;
  text: string;
  isActive: boolean;
};

const IconButton = ({ iconType, text, isActive }: Props) => {
  return (
    <Container isActive={isActive}>
      <Icon className="iconButton">
        {buildingMap[iconType] && buildingMap[iconType]}
      </Icon>
      <span>{text}</span>
    </Container>
  );
};

export default IconButton;
