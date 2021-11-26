export const UserListItem = ({ user }: any) => {
  const userRender = user.map((data: any, index: number) => {
    return (
      <tr key={index} >
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
        <td>{data.age}</td>
        <td>{data.country}</td>
      </tr>
    );
  });
  return userRender;
};
