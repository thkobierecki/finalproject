import Link from "next/link";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import Text from "components/common/Text";
import {
  Container,
  AdditionalInfo,
  MainInfoWrapper,
  Border,
  Chip,
} from "./styles";
import Button from "components/common/Button";


type Props ={
  jobOffer:any;
  userType: 'DEVELOPER' | 'COMPANY';
  handleDeleteOffer?: (id:string) => void;
}

const getColor =(value:number)=>{
  //value from 0 to 1
  var hue=((value/100)*120).toString(10);
  return ["hsl(",hue,",100%,50%)"].join("");
}

const OfferCard = ({jobOffer, userType, handleDeleteOffer}: Props) => {
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
      industryType,
      _id: companyId,
    },
    match,
    totalMatches
  } = jobOffer

  const handleApply = async (offerId: string, companyId: string) => {
    try{
      const req = await fetch("/api/application/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({offerId, companyId}),
      });
    }catch(error){
      console.log(error)
    };
  }
  
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
        <div className="chipwrapper" style={{display:'flex', width: 300}}>
          {techSkills?.map(
            (item:any, key:number) => key < 8 && item && <Chip key={`${item.label}-${key}`}>{item.label}</Chip>
          )}
        </div>
      </AdditionalInfo>
      <MainInfoWrapper style={{ justifyContent: "space-around" }}>
        {userType === 'COMPANY'?
        <>
          <Link href={`/job-offers/${_id}`}>
            <Button>See offer</Button>
          </Link>
          
          <Link href={`/company/panel/edit/${_id}`}>
            <Button variant="primary">Edit</Button>
          </Link>
          <Button variant="destructive" onClick={handleDeleteOffer ? ()=>handleDeleteOffer(_id): ()=>{}}>Remove offer</Button>
          </> :
          <> 
            <span className="salary">
              💰 {minSalary}-{maxSalary} GBP
            </span>
            <Button variant="primary" onClick={() => handleApply( _id, companyId)}>Apply</Button>
            <Link href={`/job-offers/${_id}`}>
              <Button>See offer</Button>
            </Link>
          </>
         
        }
      </MainInfoWrapper>
      {match ?
        <>
          <MainInfoWrapper>
            <Text variant="bodyBold">Match</Text>
          
            <div style={{width: 80, height: 80, marginTop: 10}}>
              <CircularProgressbar
                value={match}
                text={`${match}%`}
                styles={buildStyles({
                  pathColor: getColor(match),
                })}
              />
            </div>
          </MainInfoWrapper>
        </> : null
      }
      {totalMatches ?
        <>
          <MainInfoWrapper>
            <Text variant="bodyBold">Matched with {totalMatches} candidates</Text>
            <Link href={`/company/panel/candidates/${_id}`}>
              <Button>See best candidates</Button>
            </Link>
          </MainInfoWrapper>
        </> : null}
    </Container>
  );
};

export default OfferCard;
