import { Container, Wrapper } from "./styles";
import CircleIcon, { IconsType } from "components/common/CircleIcon";
import Text from "components/common/Text";
type Props = {
  type: IconsType;
  value: string;
  sub: string;
};
const PreferenceCard = ({ type, value, sub }: Props) => {
  return (
    <Container>
      <CircleIcon type={type} />
      <Wrapper>
        <Text variant="headingMedium" className="header">
          {value}
        </Text>
        <Text variant="bodySmall" className="subheader">
          {sub}
        </Text>
      </Wrapper>
    </Container>
  );
};

export default PreferenceCard;
