import { useState } from "react";
import Input from "../../../components/Input/index";

const Form = (props: any) => {
  const [firstname, setFirstname] = useState(new String());
  const [lastname, setLastname] = useState(new String());
  const [age, setAge] = useState(new String());

  const { submitHandler } = props;

  const submitForm = async () => {
    await submitHandler({ firstname, lastname, age });
    setFirstname(new String());
    setLastname(new String());
    setAge(new String());
  };

  return (
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
        Submit
      </button>
    </form>
  );
};

export default Form;
