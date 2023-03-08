export interface SupplyChainItem {
  id: string;
  name: string;
  color: string;
  price: number;
}

export interface Courier {
  id: string;
  name: string;
  location: string;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
}

export type Status = "Ordered" | "Awaiting Shipment" | "Shipped" | "Delivered";

export type Movement = "Inbound" | "Outbound";

export interface Supplier {
  id: string;
  name: string;
}

export interface Supplies {
  id: string;
  supplyChainItemId: string;
  quantity: number;
  warehouse: Warehouse;
  status: Status;
  movement: Movement;
  courier: Courier;
  destination: string;
  orderDate: Date;
  expectedDeliveryDate: Date;
  shippedOn: Date;
  deliveryDate: Date;
  supplier: Supplier;
}
