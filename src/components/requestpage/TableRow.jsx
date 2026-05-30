import { Eye, TrashBin } from "@gravity-ui/icons";
import { Button, Table } from "@heroui/react";

const TableRow = ({pet}) => {
  return (
    <Table.Row>
      <Table.Cell>{pet.petName}</Table.Cell>
      <Table.Cell>Request Date</Table.Cell>
      <Table.Cell>{pet.pickupDate}</Table.Cell>
      <Table.Cell className={'text-accent'}>{pet.status}</Table.Cell>
      <Table.Cell className={"flex items-center justify-center gap-2"}>
        <Button size="sm" variant="outline">
          {" "}
          <Eye></Eye>{" "}
        </Button>
        <Button size="sm" variant="outline">
          {" "}
          <TrashBin></TrashBin>{" "}
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
