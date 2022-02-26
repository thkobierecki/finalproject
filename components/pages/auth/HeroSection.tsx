import Text from "components/common/Text";
import Image from "next/image";
import { HeroWrapper, HeroContainer } from "./style";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <Text variant="headingLarge">
          MatchMe - find the job that suits you!
        </Text>
        <Image
          src="/images/info.svg"
          alt="Personal info image"
          width={450}
          height={300}
        />
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
