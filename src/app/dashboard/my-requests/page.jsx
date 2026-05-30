import TableRow from "@/components/requestpage/TableRow";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";

const MyRequestsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:5000/adoptions/${user?.id}`);
  const pets = await res.json();
  return (
    <div className="pl-5">
      {/* Heading */}
      <div className="py-5">
        <h1 className="font-bold text-3xl">
          My <span className="text-accent">Requests</span>
        </h1>
        <p className="text-gray-500">
          Manage your pets adoption requests
        </p>
      </div>
      <div>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Pet Name</Table.Column>
                <Table.Column>Request Date</Table.Column>
                <Table.Column>Pickup Date</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column className={'flex justify-center items-center'}>Actions</Table.Column>
              </Table.Header>

              <Table.Body>

                {
                    pets.map(pet => <TableRow key={pet._id} pet = {pet}></TableRow>)
                }
                

                
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default MyRequestsPage;
