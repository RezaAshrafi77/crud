import { useState } from "react";
import Form from "./Form/index";
import EditModal from "./EditModal/index";
import Table from "../../components/Table/index";

interface Home extends React.Props<any> {
  data: any;
}

const Home = (props: any) => {
  const [userList, setUserList] = useState(new Array());
  const [editItem, setEditItem] = useState({});
  const [modal, setModal] = useState(false);

  const submitHandler = (obj: any) => {
    if (
      obj.firstname.length === 0 ||
      obj.lastname.length === 0 ||
      obj.age.length === 0
    ) {
      return;
    }
    setUserList([...userList, { ...obj, id: Math.random() }]);
  };

  const tableAction = (type: string, obj: object) => {
    if (type === "delete") {
      let testList = userList.filter((item) => item !== obj);
      setUserList(testList);
    } else {
      setEditItem(obj);
      setModal(true);
    }
  };

  const editHandler = (obj: any) => {
    if (
      obj.firstname.length === 0 ||
      obj.lastname.length === 0 ||
      obj.age.length === 0
    ) {
      return;
    }
    let testList = userList.map((item) => (item.id === obj.id ? obj : item));
    setUserList(testList);
    setEditItem({});
    setModal(false);
  };

  return (
    <div className="home d-flex flex-column p-4">
      <h1>Simple Form</h1>
      <p>
        Please input your <strong>first name</strong>,{" "}
        <strong>last name</strong> and <strong>age</strong> correctly.{" "}
      </p>
      <Form submitHandler={submitHandler} />
      {userList.length > 0 ? (
        <Table
          data={userList}
          tableAction={tableAction}
          setEditItem={setEditItem}
        />
      ) : null}
      {modal ? (
        <EditModal editHandler={editHandler} editItem={editItem} />
      ) : null}
    </div>
  );
};

export default Home;
