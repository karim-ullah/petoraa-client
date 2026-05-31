'use client'
import { Eye, TrashBin } from "@gravity-ui/icons";
import { Button, Table } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const TableRow = ({pet, token}) => {
  const handleDelete =async()=>{
    const res = await fetch(`http://localhost:5000/adoptions/${pet._id}`,{
      method: 'DELETE',
      headers: {
        authorization : `Bearer ${token}`
      }

    })

    const data = await res.json()
    if(data){
      toast.success('Deleted successfully')
      redirect('/dashboard/my-requests')
    }
  }
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
        <Button size="sm" variant="outline" onClick={handleDelete}>
        
          <TrashBin></TrashBin>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
