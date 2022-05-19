import Text from "components/common/Text";
import {
  Container,
  AdditionalInfo,
  MainInfoWrapper,
  Border,
  Chip,
} from "./styles";
import Button from "components/common/Button";
import Link from "next/link";

type Props ={jobOffer:any; userType: 'DEVELOPER' | 'COMPANY'}

const OfferCard = ({jobOffer, userType}: Props) => {
  const {
    jobTitle,
    location,
    mainTech,
    techSkills,
    minSalary,
    maxSalary,
    _id,
    seniority,
    isRemote,
    company: {
      companyName,
      companyType,
      industryType
    }
  } = jobOffer
  return (
    <Container>
      <Border />
      <MainInfoWrapper style={{ justifyContent: "space-around" }}>
        <Text variant="headingMedium">{jobTitle}</Text>
        <div className="chipwrapper">
          <Text variant="headingSmall" style={{ marginRight: 10 }}>
            {companyName}{" "}
          </Text>
          <Chip isActive>{seniority.text}</Chip>
          <Chip isActive>{companyType.text}</Chip>
          <Chip isActive>{industryType.text}</Chip>
        </div>
        <div>
          <span className="locationChip">🌍 {location.text}</span>{" "}
          {isRemote && <span className="locationChip">⛱ Remote</span>}
        </div>
      </MainInfoWrapper>
      <AdditionalInfo>
        <Text variant="headingSmall">Main Technology</Text>
        <div className="chipwrapper">
          <Chip isActive>{mainTech.text}</Chip>
        </div>

        <Text variant="headingSmall">Tech Skills </Text>
        <div className="chipwrapper">
          {techSkills?.map(
            (item:any, key:number) => key < 8 && item && <Chip key={`${item.label}-${key}`}>{item.label}</Chip>
          )}
        </div>
      </AdditionalInfo>
      <MainInfoWrapper style={{ justifyContent: "space-around" }}>
        <span className="salary">
          💰 {minSalary}-{maxSalary} GBP
          {/* {minSalary}-{maxSalary}
            {currency} */}
        </span>
        {userType === 'COMPANY'?
        <>
          <Link href={`/job-offers/${_id}`}>
            <Button>See offer</Button>
          </Link>
          
          <Link href={`/company/panel/edit/${_id}`}>
            <Button variant="primary">Edit</Button>
          </Link>
          </> :
          <> 
            <Button variant="primary">Apply</Button>
            <Link href={`/job-offers/${_id}`}>
              <Button>See offer</Button>
            </Link>
          </>
         
        }
      </MainInfoWrapper>
    </Container>
  );
};

export default OfferCard;
