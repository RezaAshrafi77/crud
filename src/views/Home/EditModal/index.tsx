import React from "react";
import { useState } from "react";

import Input from "../../../components/Input/index";

import "./index.scss";
export default function EditModal(props: any) {
  const { editHandler, editItem } = props;

  const [firstname, setFirstname] = useState(editItem.firstname);
  const [lastname, setLastname] = useState(editItem.lastname);
  const [age, setAge] = useState(editItem.age);

  const submitForm = async () => {
    await editHandler({ firstname, lastname, age, id: editItem.id });
    setFirstname(new String());
    setLastname(new String());
    setAge(new String());
  };

  return (
    <div className="edit-modal">
      <div>
        <form className="mb-4" action={"#"}>
          <Input
            label={"First name"}
            type={"text"}
            htmlFor={"Firstname"}
            placeholder={"Enter first name"}
            onChange={setFirstname}
            inputMode={"text"}
            value={firstname}
          />
          <Input
            label={"Last name"}
            type={"text"}
            htmlFor={"Lastname"}
            placeholder={"Enter last name"}
            onChange={setLastname}
            inputMode={"text"}
            value={lastname}
          />
          <Input
            label={"Age"}
            type={"text"}
            htmlFor={"Age"}
            placeholder={"Enter Age"}
            onChange={setAge}
            inputMode={"number"}
            maxLength={3}
            minLength={1}
            value={age}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => submitForm()}
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
