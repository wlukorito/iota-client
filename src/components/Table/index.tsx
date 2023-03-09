import { DataTableColumn } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  TableCaption,
  TableContainer,
  Text,
  Tbody,
  Td,
  Box,
  Th,
  Thead,
  Tr,
  Center,
} from "@chakra-ui/react";

type DataTableProps = {
  title: string;
  cols: DataTableColumn[];
  items: { [k: string]: any }[];
};

function getTh(col: DataTableColumn) {
  return <Th key={col.accessor}>{col.accessor}</Th>;
}

function getTd(item: { [k: string]: any }, col: DataTableColumn) {
  return <Td key={col.accessor}>{item[col.accessor]} </Td>;
}

function getTr(
  item: { [k: string]: any },
  cols: DataTableColumn[],
  index: number
) {
  const tds: JSX.Element[] = [<Td key="#">{index}</Td>];
  // create row
  cols.forEach((col) => {
    tds.push(getTd(item, col));
  });

  return <Tr key={index}>{tds}</Tr>;
}

function DataTable({ title, cols, items }: DataTableProps) {
  function getRows() {
    const rows: JSX.Element[] = [];
    const headers: JSX.Element[] = [<Td key="#">#</Td>];

    // create columns
    cols.forEach((col) => {
      headers.push(getTh(col));
    });

    // create rows
    items.forEach((item, index) => {
      rows.push(getTr(item, cols, index + 1));
    });

    return [headers, rows];
  }

  return (
    <Card>
      <Center>
        <CardHeader>
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
        </CardHeader>
      </Center>
      <CardBody>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>{title}</TableCaption>
            <Thead>
              <Tr>{getRows()[0]}</Tr>
            </Thead>
            <Tbody>{getRows()[1]}</Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}
export default DataTable;
