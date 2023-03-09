import DataTable from "@/components/Table";
import { fetchData } from "@/utils/client";
import { NextPage } from "next";
import { DataTableColumn, Supplies } from "@/types";
import { cleanData, generateColsFromData } from "@/utils/cleanCols";

type SuppliesPageProps = {
  supplies: Supplies[];
};

const SuppliesPage: NextPage<SuppliesPageProps> = ({ supplies }) => {
  const cols: DataTableColumn[] = generateColsFromData<Supplies>(
    supplies[0] || {}
  );

  return (
    <DataTable
      title="Supply Chain Item Trail"
      cols={cols}
      items={cleanData(supplies)}
    />
  );
};

export default SuppliesPage;

export async function getServerSideProps() {
  const supplies = await fetchData<Supplies>("events");

  return {
    props: {
      supplies,
    },
  };
}
