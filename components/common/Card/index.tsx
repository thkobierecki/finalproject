import Text from "../Text";
import { Wrapper, Content } from "./styles";

type Props = {
  title?: string;
  children: React.ReactNode;
};
const Card = ({ title, children }: Props) => {
  return (
    <Wrapper >
      {title && (
        <Text variant="subheadingSmall" style={{ marginBottom: "10px" }}>
          {title}
        </Text>
      )}
      <Content >{children}</Content>
    </Wrapper>
  );
};
export default Card;
