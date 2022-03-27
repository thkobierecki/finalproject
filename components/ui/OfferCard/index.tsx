import Text from "components/common/Text";
import {
  Container,
  AdditionalInfo,
  MainInfoWrapper,
  Border,
  Chip,
} from "./styles";
import Button from "components/common/Button";

const OfferCard = () => {
  return (
    <Container>
      <Border />
      <MainInfoWrapper style={{ justifyContent: "space-around" }}>
        <Text variant="headingMedium">Senior Front End Enginner</Text>
        <div className="chipwrapper">
          <Text variant="headingSmall" style={{ marginRight: 10 }}>
            Veeqo{" "}
          </Text>
          <Chip isActive>Senior</Chip>
          <Chip isActive>Startup</Chip>
          <Chip isActive>E-commerce</Chip>
        </div>
        <div>
          <span className="locationChip">🌍 Swansea</span>{" "}
          <span className="locationChip">⛱ Remote</span>
        </div>
      </MainInfoWrapper>
      <AdditionalInfo>
        <Text variant="headingSmall">Main Technology</Text>
        <div className="chipwrapper">
          <Chip isActive>JavaScript</Chip>
        </div>

        <Text variant="headingSmall">Tech Skills </Text>
        <div className="chipwrapper">
          {[
            "REACT",
            "JAVASCRIPT",
            "RUBY",
            "CSS",
            "HTML",
            "JENKINS",
            "AWS",
            "GIT",
          ].map(
            (item, key) => key < 8 && <Chip key={`${item}-${key}`}>{item}</Chip>
          )}
        </div>
      </AdditionalInfo>
      <MainInfoWrapper style={{ justifyContent: "space-around" }}>
        <span className="salary">
          💰 80-100k GBP
          {/* {minSalary}-{maxSalary}
            {currency} */}
        </span>
        <Button>See offer</Button>
        <Button variant="primary">Apply</Button>
      </MainInfoWrapper>
    </Container>
  );
};

export default OfferCard;
