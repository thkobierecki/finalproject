import { Container, Wrapper, Pill, Row } from "./styles";
import CircleIcon, { IconsType } from "components/common/CircleIcon";
import Text from "components/common/Text";
type Props = {
  type: IconsType;
  value?: string;
  sub: string;
  numOfMoreItems?: number;
};
const PreferenceCard = ({ type, value, sub, numOfMoreItems }: Props) => {
  return (
    <Container>
      <CircleIcon type={type} />
      <Wrapper>
        <Text variant="headingMedium" className="header" data-testid="preference-card-value">
          {value}
        </Text>
        <Row>
          <Text variant="bodySmall" className="subheader" data-testid="preference-card-subheader">
            {sub}
          </Text>
          {numOfMoreItems && numOfMoreItems > 0 ? <Pill>+ {numOfMoreItems} </Pill> : null}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default PreferenceCard;
