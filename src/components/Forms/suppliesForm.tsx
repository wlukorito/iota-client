import { FC, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import {
  Courier,
  Supplier,
  Supplies,
  SupplyChainItem,
  Warehouse,
} from "@/types";

enum Movement {
  Inbound = "Inbound",
  Outbound = "Outbound",
}

type SuppliesFormProps = {
  supplies?: Supplies;
};

const SuppliesForm: FC<SuppliesFormProps> = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [couriers, setCouriers] = useState<Courier[]>([]);
  const [items, setItems] = useState<SupplyChainItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLSelectElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    const color = colorRef.current?.value;
    console.log(name, price, color);
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5001/lists")
      .then((res) => res.json())
      .then((data) => {
        setSuppliers(data.suppliers);
        setWarehouses(data.warehouses);
        setCouriers(data.couriers);
        setItems(data.items);
      })
      .finally(() => setLoading(false));

    if (destinationRef.current) {
      destinationRef.current.value = "test";
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Card>
      <CardBody>
        <FormControl>
          <form onSubmit={onSubmit}>
            <Stack spacing={3} direction="column">
              <FormLabel>Item</FormLabel>
              <Select ref={colorRef} placeholder="Select Item">
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
              <FormLabel>Quantity</FormLabel>
              <Input ref={priceRef} type="number" placeholder="Quantity" />
              <FormLabel>Status</FormLabel>
              <Input ref={priceRef} type="text" placeholder="Status" />
              <FormLabel>Movement</FormLabel>
              <Select ref={colorRef} placeholder="Select movement">
                <option value={Movement.Inbound}>{Movement.Inbound}</option>
                <option value={Movement.Outbound}>{Movement.Outbound}</option>
              </Select>
              <FormLabel>Destination</FormLabel>
              <Input ref={destinationRef} type="text" />
              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Order date</FormLabel>
                  <Input ref={priceRef} type="date" />
                </FormControl>
                <FormControl>
                  <FormLabel>Expected Delivery Date</FormLabel>
                  <Input ref={priceRef} type="date" />
                </FormControl>
              </Stack>
              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Shipped on</FormLabel>
                  <Input ref={priceRef} type="date" />
                </FormControl>
                <FormControl>
                  <FormLabel>Deleivery Date</FormLabel>
                  <Input ref={priceRef} type="date" />
                </FormControl>
              </Stack>

              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Warehouse</FormLabel>
                  <Select ref={colorRef} placeholder="Select Warehouse">
                    {warehouses.map((warehouse) => (
                      <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Supplier</FormLabel>
                  <Select ref={colorRef} placeholder="Select Supplier">
                    {suppliers.map((supplier) => (
                      <option key={supplier.id} value={supplier.id}>
                        {supplier.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Courier</FormLabel>
                  <Select ref={colorRef} placeholder="Select Courier">
                    {couriers.map((courier) => (
                      <option key={courier.id} value={courier.id}>
                        {courier.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </Stack>
          </form>
        </FormControl>
      </CardBody>
    </Card>
  );
};

export default SuppliesForm;
