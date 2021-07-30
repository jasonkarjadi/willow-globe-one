import { Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const ListLayout = ({ listTitle, listHead, listBody }) => {
  return (
    <>
      <Heading>{listTitle}</Heading>
      <Table>
        <Thead>
          <Tr>
            {listHead.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {listBody.map((row, index) => (
            <Tr key={index}>
              {row.map((cell, index) => (
                <Td key={index}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ListLayout;
