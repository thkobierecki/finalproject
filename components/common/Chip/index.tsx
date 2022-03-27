import { ChipBtn } from "./styles";
type Props = {
  name: string;
  active: boolean;
  handleClick: () => void;
};
const Chip = ({ name, active, handleClick }: Props) => {
  return (
    <ChipBtn active={active} onClick={() => handleClick()}>
      {name}
    </ChipBtn>
  );
};

export default Chip;
