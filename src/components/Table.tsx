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
            {/* {IconEdit} */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
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