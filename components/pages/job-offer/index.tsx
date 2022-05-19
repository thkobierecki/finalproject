import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Parser from "html-react-parser";
import useSWR from "swr";
import Button from "components/common/Button";
import Text from "components/common/Text";
import PanelTemplate from "components/templates/panel";

import { ApplyButton, ApplyWrapper, CompanyHiglights, Container, JobDescription, MainInfoWrapper, OfferCard, OfferContent, OfferHeading, OfferHighlights, OfferWrapper, Row, SContainer } from "./style";


import { useRouter } from "next/router";
import { jobOfferAdapter } from "utils/jobOfferAdapter";
import { JobOffer } from "types";
import { useSession } from "next-auth/react";
type JobOffersData = {
  jobOffer: JobOffer;
}
//@ts-ignore
const fetcher = (...args: any) => fetch(...args)
  .then((res) => res.json())
  .then((data: JobOffersData)=>jobOfferAdapter(data.jobOffer))

const DevProfilePage = () => {
  //@ts-ignore
  const { data: session } = useSession();
  const userType =
  //@ts-ignore
  session&& session.user && session.user.accountType
  const router = useRouter();
  const { id } = router.query;
  const { data , error } = useSWR(`/api/job-offers/${id}`, fetcher);

  if(error) return <p>error</p>
  if(!data) return <p>Loading</p>
  const {
    jobTitle,
    location,
    mainTech,
    techSkills,
    minSalary,
    maxSalary,
    employmentType,
    _id,
    seniority,
    description,
    isRemote,
    company: {
      companyName,
      companyType,
      industryType,

    }
  } = data

  return (
    <PanelTemplate>
      <Container>
          <OfferWrapper>
            <CompanyHiglights>
              <div className="logoWrapper">
                {/* <Logo big logo={company.companyLogo} /> */}
              </div>
              <MainInfoWrapper>
                <Text variant="headingXXL">{companyName} 🔥 </Text>
                {/* <span className="boldSpan">{highlight} </span> */}
                <div>
                  <span className="locationChip">🌍 {location?.text}</span>{" "}
                  {isRemote && <span className="locationChip">🏖️ Remote</span>}
                </div>
              </MainInfoWrapper>
            </CompanyHiglights>
            <OfferHeading>
              <SContainer>
                <Text variant="headingXXL">🚀 {jobTitle}</Text>
                <Text variant="headingLarge">
                  💰 {minSalary} - {maxSalary} GBP💰
                </Text>
              </SContainer>
              {userType === "DEVELOPER" &&
                <Button variant="primary" style={{width: 250, fontSize: 24}}>
                  Apply Now
                </Button>}
            </OfferHeading>
            <OfferContent>
              <JobDescription>{Parser(description)}</JobDescription>
              <OfferHighlights>
                <div className="colWrapper">
                  <span className="title">Location</span>
                  <div className="chipwrapper">
                    <span className="locationChip">🌍 {location?.text}</span>{" "}
                    {isRemote && (
                      <span className="locationChip">🏖️ Remote</span>
                    )}
                  </div>
                </div>
                <div className="colWrapper">
                  <span className="title">Main Tech</span>
                  <div className="chipwrapper">
                      <span className="locationChip">
                        {mainTech?.text}
                      </span>
                  </div>
                </div>
                <div className="colWrapper">
                  <span className="title">Tech Stack</span>
                  <div className="chipwrapper">
                    {techSkills.map((item) => (
                      <span key={`tech-stack-${item?.label}`} className="locationChip">
                        {item?.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="colWrapper">
                  <span className="title">Job Type</span>
                  <div className="chipwrapper">
                    <span className="locationChip">{employmentType?.text}</span>{" "}
                  </div>
                </div>
              </OfferHighlights>
            </OfferContent>
            <ApplyWrapper>
            {userType === "DEVELOPER" &&
                <Button variant="primary" style={{width: 250, fontSize: 24}}>
                Apply Now
              </Button>
            }
            </ApplyWrapper>
          </OfferWrapper>
        </Container>
    </PanelTemplate>
  );
};

export default DevProfilePage;
