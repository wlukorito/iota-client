import { DataTableColumn, Supplies } from "@/types";

export function cleanTableCols(cols: DataTableColumn[]) {
  return cols.filter(
    (col) => col.accessor !== "id" && col.accessor !== "supplyChainItemId"
  );
}

export function generateColsFromData<T extends {}>(data: T): DataTableColumn[] {
  return Object.keys(data)
    .map((key) => ({
      accessor: key,
      title: key.toUpperCase(),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function cleanData(items: Supplies[]) {
  return items.map((item) => {
    return {
      ...item,
      warehouse: item.warehouse.name,
      supplier: item.supplier.name,
      courier: item.courier.name,
    };
  });
}
