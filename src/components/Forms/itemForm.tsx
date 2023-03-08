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
import { useRef } from "react";

enum Color {
  Yellow = "yellow",
  Blue = "blue",
  Red = "red",
  White = "white",
  Green = "green",
  Black = "black",
}

const ItemForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLSelectElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    const color = colorRef.current?.value;
    console.log(name, price, color);
  };

  return (
    <Card>
      <CardBody>
        <FormControl>
          <form onSubmit={onSubmit}>
            <Stack spacing={4} direction="column">
              <FormLabel>Name</FormLabel>
              <Input ref={nameRef} type="text" placeholder="Item name" />
              <FormLabel>Price</FormLabel>
              <Input ref={priceRef} type="number" placeholder="Item price" />
              <FormLabel>Color</FormLabel>
              <Select ref={colorRef} placeholder="Select color">
                <option value={Color.Black}>{Color.Black}</option>
                <option value={Color.Blue}>{Color.Blue}</option>
                <option value={Color.Green}>{Color.Green}</option>
                <option value={Color.Red}>{Color.Red}</option>
                <option value={Color.White}>{Color.White}</option>
                <option value={Color.Yellow}>{Color.Yellow}</option>
              </Select>
              <Button type="submit" colorScheme="blue">
                Button
              </Button>
            </Stack>
          </form>
        </FormControl>
      </CardBody>
    </Card>
  );
};

export default ItemForm;
