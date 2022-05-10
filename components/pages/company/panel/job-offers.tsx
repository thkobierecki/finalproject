import Link from "next/link";
import PanelTemplate from "components/templates/panel";
import Button from "components/common/Button";
import Text from "components/common/Text";
import { HeadingWrapper } from "./styles";
import useSWR from "swr";


//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

const CompanyProfilePage = () => {
  const { data } = useSWR(`/api/company/posts`, fetcher);
  console.log(data)

  return (
    <PanelTemplate>
      <HeadingWrapper>
        <Text variant="headingLarge">Job Offers</Text>
        <Link href={"/company/panel/add-new"}>
          <Button className="editButton">Add new</Button>
        </Link>
      </HeadingWrapper>
    </PanelTemplate>
  );
};

export default CompanyProfilePage;
