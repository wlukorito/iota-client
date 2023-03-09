import ItemForm from "@/components/Forms/itemForm";
import DataTable from "@/components/Table";
import { DataTableColumn, SupplyChainItem } from "@/types";
import { generateColsFromData } from "@/utils/cleanCols";
import { fetchData } from "@/utils/client";
import { Container, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

const ItemsPage: NextPage<{ items: SupplyChainItem[] }> = ({ items }) => {
  const cols: DataTableColumn[] = generateColsFromData<SupplyChainItem>(
    items[0] || {}
  );

  return (
    <VStack spacing={4}>
      <Container>
        <ItemForm />
      </Container>
      <DataTable title="Supply Chain Items" cols={cols} items={items} />
    </VStack>
  );
};

export default ItemsPage;

export async function getServerSideProps() {
  const items = await fetchData<SupplyChainItem>("items");

  return {
    props: {
      items,
    },
  };
}
