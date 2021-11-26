import { Table } from "react-bootstrap";
import { UserListItem } from "../../basmodule";

export const UserList = ({ user }: any) => {
  if (user.length > 0) {
    return (
      <Table striped >
        <thead>
          <tr >
            <th>First Name</th>
            <th>Last Name</th>
            <th>age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <UserListItem user={user} />
        </tbody>
      </Table>
    );
  }
  return <div> </div>;
};
