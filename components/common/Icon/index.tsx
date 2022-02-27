import { IconContext } from "react-icons";

type Props = {
  children: React.ReactNode;
  className: string;
};
const Icon = ({ children, className }: Props) => {
  return (
    <IconContext.Provider value={{ className: className }}>
      <div>{children}</div>
    </IconContext.Provider>
  );
};

export default Icon;
