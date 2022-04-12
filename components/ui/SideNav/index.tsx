import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../../common/Text";
import { Container, Wrapper, Navigation, NavItem } from "./styles";
import {
  IoPersonOutline,
  IoDocumentTextOutline,
  IoCheckboxOutline,
} from "react-icons/io5";
import Icon from "../../common/Icon";
import { useSession } from "next-auth/react";

const sideNavMap = {
  DEVELOPER: [
    {
      url: "/dev/panel/profile",
      icon: <IoPersonOutline />,
      title: "My Profile",
    },
    {
      url: "/dev/panel/preferences",
      icon: <IoDocumentTextOutline />,
      title: "Preferences",
    },
    {
      url: "/dev/panel/matchmaking",
      icon: <IoCheckboxOutline />,
      title: "MatchMaking",
    },
  ],
  COMPANY: [
    {
      url: "/company/panel/profile",
      icon: <IoPersonOutline />,
      title: "My Profile",
    },
  ],
};

const SideNav = () => {
  const { data } = useSession();
  const router = useRouter();
  const userType =
    //@ts-ignore
    data && data.user && data.user.accountType
      ? //@ts-ignore
        (data.user.accountType as "COMPANY" | "DEVELOPER")
      : "DEVELOPER";
  const checkActiveRoute = (route: string) => router.asPath === route;
  return (
    <Container>
      <Wrapper>
        <Navigation>
          {sideNavMap[userType].map((item) => (
            <Link href={item.url}>
              <NavItem isActive={checkActiveRoute(item.url)}>
                <Icon className="navIcon">{item.icon}</Icon>
                <Text>{item.title}</Text>
              </NavItem>
            </Link>
          ))}
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default SideNav;
