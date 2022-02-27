import { ChipBtn } from "./styles";
type Props = {
  name: string;
  active: boolean;
};
const Chip = ({ name, active }: Props) => {
  return <ChipBtn active={active}>{name}</ChipBtn>;
};

export default Chip;
