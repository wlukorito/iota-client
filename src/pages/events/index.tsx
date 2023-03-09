import SuppliesForm from "@/components/Forms/suppliesForm";
import { SupplyChainLists } from "@/types";
import { fetchData } from "@/utils/client";
import { Container } from "@chakra-ui/react";
import { NextPage } from "next";

type EventsProps = {
  lists: SupplyChainLists;
};

const Events: NextPage<EventsProps> = ({ lists }) => {
  return (
    <Container>
      <SuppliesForm lists={lists} />
    </Container>
  );
};

export default Events;

export async function getStaticProps() {
  const lists = await fetchData<SupplyChainLists>("lists");

  if (!lists) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      lists,
    },
    revalidate: 10,
  };
}
