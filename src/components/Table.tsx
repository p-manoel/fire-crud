import { IconEdit, IconTrash } from "../../public/icons"
import Customer from "../core/Customer"

interface TableProps {
  customers: Customer[];
  selectedCustomer?: (customer: Customer) => void;
  deletedCustomer?: (customer: Customer) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.selectedCustomer || props.deletedCustomer;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions ? (<th className="p-4">Actions</th>) : false}
      </tr>
    )
  }

  function renderData() {
    return props.customers?.map((customer, index) => {
      return (
        <tr key={customer.id} className={`
          ${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
        `}>
          <td className="text-left p-4">{customer.id}</td>
          <td className="text-left p-4">{customer.name}</td>
          <td className="text-left p-4">{customer.age}</td>
          {showActions ? renderActions(customer) : false}
        </tr>
      )
    })
  }

  function renderActions(customer: Customer) {
    return (
      <td className="flex justify-center">
        {props.selectedCustomer ? (
          <button onClick={() => props.selectedCustomer?.(customer)} className={`
          flex
          justify-center items-center
          p-2 m-1
          text-green-600 rounded-full
          hover:bg-purple-50
        `}>
            {IconEdit}
          </button>
        ) : false}
        {props.deletedCustomer ? (
          <button onClick={() => props.deletedCustomer?.(customer)} className={`
            flex
            justify-center items-center
            p-2 m-1
            text-red-500 rounded-full
            hover:bg-purple-50
          `}>
            {IconTrash}
          </button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}