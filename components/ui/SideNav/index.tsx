import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../../common/Text";
import { Container, Wrapper, Navigation, NavItem } from "./styles";
import {
  IoPersonOutline,
  IoDocumentTextOutline,
  //   IoLogOutOutline,
  IoCheckboxOutline,
} from "react-icons/io5";
import Icon from "../../common/Icon";

const SideNav = () => {
  const router = useRouter();
  const checkActiveRoute = (route: string) => router.asPath === route;
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Link href={"/dev/panel/profile"}>
            <NavItem isActive={checkActiveRoute("/dev/panel/profile")}>
              <Icon className="navIcon">
                <IoPersonOutline />
              </Icon>
              <Text>My Profile</Text>
            </NavItem>
          </Link>
          <Link href={"/dev/panel/preferences"}>
            <NavItem isActive={checkActiveRoute("/dev/panel/preferences")}>
              <Icon className="navIcon">
                <IoDocumentTextOutline />
              </Icon>
              <Text>Preferences</Text>
            </NavItem>
          </Link>
          <Link href={"/dev/panel/matchmaking"}>
            <NavItem isActive={checkActiveRoute("/dev/panel/matchmaking")}>
              <Icon className="navIcon">
                <IoCheckboxOutline />
              </Icon>
              <Text>MatchMaking</Text>
            </NavItem>
          </Link>
          {/* <Link href={"/devs/panel/profile"}>
            <NavItem>
              <Icon className="navIcon">
                <IoPersonOutline />
              </Icon>
              <Text>My Profile</Text>
            </NavItem>
          </Link> */}
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default SideNav;
