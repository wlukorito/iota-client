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
  Status,
  SupplyChainItem,
  SupplyChainLists,
  Movement,
  Supplies,
} from "@/types";

type SuppliesFormProps = {
  lists: SupplyChainLists;
};

const SuppliesForm: FC<SuppliesFormProps> = ({
  lists: { suppliers, warehouses, couriers, items },
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const refs = useRef(new Array(12));
  const refIndices = [
    "supplyChainItemId",
    "supplier",
    "quantity",
    "destination",
    "status",
    "movement",
    "warehouse",
    "courier",
    "orderDate",
    "expectedDeliveryDate",
    "shippedOn",
    "deliveryDate",
    "price",
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toSubmit: { [key: string]: string } = {};
    refs.current.forEach((ref, index) => {
      toSubmit[refIndices[index]] = ref?.value;
    });

    // TODO: validate form

    // submit to API
    setIsSubmitting(true);
    fetch("http://localhost:5001/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSubmit),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Card>
      <CardBody>
        <FormControl>
          <form onSubmit={onSubmit}>
            <Stack spacing={5} direction="column">
              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Item</FormLabel>
                  <Select
                    ref={(ref) => (refs.current[0] = ref)}
                    placeholder="Select Item"
                  >
                    {items.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Supplier</FormLabel>
                  <Select
                    ref={(ref) => (refs.current[1] = ref)}
                    placeholder="Select Supplier"
                  >
                    {suppliers.map((supplier) => (
                      <option key={supplier.id} value={supplier.id}>
                        {supplier.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Quantity</FormLabel>
                  <Input
                    ref={(ref) => (refs.current[2] = ref)}
                    type="number"
                    placeholder="Quantity"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    ref={(ref) => (refs.current[12] = ref)}
                    type="number"
                    placeholder="Price"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Destination</FormLabel>
                  <Input
                    ref={(ref) => (refs.current[3] = ref)}
                    type="text"
                    placeholder="Destination"
                  />
                </FormControl>
              </Stack>

              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Status</FormLabel>
                  <Select
                    ref={(ref) => (refs.current[4] = ref)}
                    placeholder="Select Status"
                  >
                    {Object.values(Status).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Movement</FormLabel>
                  <Select
                    ref={(ref) => (refs.current[5] = ref)}
                    placeholder="Select movement"
                  >
                    {Object.values(Movement).map((movement) => (
                      <option key={movement} value={movement}>
                        {movement}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Warehouse</FormLabel>
                  <Select
                    ref={(ref) => (refs.current[6] = ref)}
                    placeholder="Select Warehouse"
                  >
                    {warehouses.map((warehouse) => (
                      <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Courier</FormLabel>
                  <Select
                    ref={(ref) => (refs.current[7] = ref)}
                    placeholder="Select Courier"
                  >
                    {couriers.map((courier) => (
                      <option key={courier.id} value={courier.id}>
                        {courier.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Stack>

              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Order date</FormLabel>
                  <Input ref={(ref) => (refs.current[8] = ref)} type="date" />
                </FormControl>
                <FormControl>
                  <FormLabel>Expected Delivery Date</FormLabel>
                  <Input ref={(ref) => (refs.current[9] = ref)} type="date" />
                </FormControl>
              </Stack>
              <Stack direction={["column", "row"]}>
                <FormControl>
                  <FormLabel>Shipped on</FormLabel>
                  <Input ref={(ref) => (refs.current[10] = ref)} type="date" />
                </FormControl>
                <FormControl>
                  <FormLabel>Delivery Date</FormLabel>
                  <Input ref={(ref) => (refs.current[11] = ref)} type="date" />
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
