import { Table } from '@heroui/react';
import React from 'react';
import TableRow from './TableRow';

const TableDisplay = ({pets, token}) => {
    return (
        <div className='max-w-full'>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="">
              <Table.Header>
                <Table.Column isRowHeader>Pet Name</Table.Column>
                <Table.Column>Request Date</Table.Column>
                <Table.Column>Pickup Date</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column className={'flex justify-center items-center'}>Actions</Table.Column>
              </Table.Header>

              <Table.Body>

                {
                    pets.map(pet => <TableRow key={pet._id} pet = {pet} token ={token}></TableRow>)
                }
                

                
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    );
};

export default TableDisplay;