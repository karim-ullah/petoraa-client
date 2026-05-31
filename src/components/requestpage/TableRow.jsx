import { Eye, TrashBin } from "@gravity-ui/icons";
import { Button, Table } from "@heroui/react";
import Link from "next/link";

const TableRow = ({pet}) => {
  return (
    <Table.Row>
      <Table.Cell>{pet.petName}</Table.Cell>
      <Table.Cell>{pet.requestDate}</Table.Cell>
      <Table.Cell>{pet.pickupDate}</Table.Cell>
      <Table.Cell className={'text-accent'}>{pet.status}</Table.Cell>
      <Table.Cell className={"flex items-center justify-center gap-2"}>
        <Button size="sm" variant="outline">
          
          <Link href={`/all-pets/${pet.petId}`}><Eye></Eye></Link>
        </Button>
        <Button size="sm" variant="outline">
        
          <TrashBin></TrashBin>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
