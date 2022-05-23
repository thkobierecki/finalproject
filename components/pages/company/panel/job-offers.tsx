import Link from "next/link";
import PanelTemplate from "components/templates/panel";
import Button from "components/common/Button";
import Text from "components/common/Text";
import { EmptyStateWrapper, HeadingWrapper } from "./styles";
import useSWR from "swr";
import OfferCard from "components/ui/OfferCard";
import { JobOffer } from "types";
import { jobOfferAdapter } from "utils/jobOfferAdapter";
import Loader from "components/common/Loader";

type JobOffersData = {
  jobOffers: JobOffer[];
}

const EmptyState =()=>{
  return(
  <EmptyStateWrapper>
    <Text variant="headingXXL">Looks like you don't have any listing yet 😔 </Text>
    <Link href={"/company/panel/add-new"}>
      <Button variant="primary">Add new</Button>
    </Link>
  </EmptyStateWrapper>)
}

//@ts-ignore
const fetcher = (...args: any) => fetch(...args)
  .then((res) => res.json())
  .then((data: JobOffersData)=>data.jobOffers)
  .then((jobOffers) => jobOffers?.map(jobOffer => jobOfferAdapter(jobOffer)));


const CompanyProfilePage = () => {
  const { data, error,mutate } = useSWR(`/api/company/posts`, fetcher);
  const handleDelete = async(id:string) =>{
    const req = await fetch(`/api/company/posts/${id}`, { method: 'DELETE' });
  }
  const handleDeleteOffer = async(id:string) =>{
    if(window.confirm("Delete this job post?")) {
      try{
        await handleDelete(id);
        const newData = data?.filter(jobOffer => jobOffer._id !== id);
        await mutate(newData, false);
      }catch(err){ console.log(err)}
      
    }
  }
  return (
    <PanelTemplate>
      <HeadingWrapper>
        <Text variant="headingLarge">Job Offers</Text>
        <Link href={"/company/panel/add-new"}>
          <Button className="editButton">Add new</Button>
        </Link>
      </HeadingWrapper>
      {error && <Text variant="headingLarge">There was an error trying to fetch your job offers, try again.</Text>}
      {!data && <Loader width={60} height={60} />}
      {data && data.length < 1 ?
       <EmptyState /> : 
        data?.map((jobOffer) => <OfferCard jobOffer={jobOffer} userType={'COMPANY'} handleDeleteOffer={handleDeleteOffer}/>)}
    </PanelTemplate>
  );
};

export default CompanyProfilePage;
