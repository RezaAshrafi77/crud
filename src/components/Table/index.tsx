import React from "react";

const Table = (props: any) => {
  const { data, tableAction } = props;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Age</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr key={index}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.age}</td>
            <td>
              <button className="btn btn-danger mr-1" onClick={() =>  tableAction('delete', item)}>delete</button>
              <button className="btn btn-warning" onClick={() =>  tableAction('edit', item)}>edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
