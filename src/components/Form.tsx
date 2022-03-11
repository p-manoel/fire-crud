import { useState } from "react";
import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  customer: Customer;
  changedCustomer?: (customer: Customer) => void;
  canceled?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.customer?.id;
  const [name, setName] = useState(props.customer?.name ?? '');
  const [age, setAge] = useState(props.customer?.age ?? 0);

  return (
    <div>
      {id ? (
        <Input text="Id" value={id} readOnly className="mb-5"/>
      ) : false}
      <Input text="Name" value={name} onChange={setName} className="mb-5"/>
      <Input text="Age" value={age} type="number" onChange={setAge}/>
      <div className="flex justify-end mt-3">
        <Button color="blue" className="mr-2" onClick={() => props.changedCustomer?.(new Customer(name, +age, id))}>
          {id ? 'Edit' : 'Add'}
        </Button>
        <Button onClick={props.canceled}>
          Cancel
        </Button>
      </div>
    </div>
  )
}