import { useEffect, useState } from "react";
import CustomerCollection from "../backend/database/CustomerCollection";
import Customer from "../core/Customer";
import CustomerRepository from "../core/CustomerRepository";
import useVisibility from "./useVisibility";

export default function useCustomers() {
  const repository: CustomerRepository = new CustomerCollection();

  const { table, form, showTable, showForm } = useVisibility();

  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(getAll, [])
  
  function getAll() {
    repository.getAll().then((customers) => {
      setCustomers(customers);
      showTable();
    });

  }

  function selectCustomer(customer: Customer) {
    setCustomer(customer);
    showForm();
  }

  async function deletedCustomer(customer: Customer) {
    await repository.delete(customer);
    getAll();
  }

  async function saveCustomer(customer: Customer) {
    await repository.save(customer);
    getAll();
  }

  function addCustomer() {
    setCustomer(Customer.empty());
    showForm();
  }

  return {
    table,
    form,
    showTable,
    customer,
    customers,
    saveCustomer,
    deletedCustomer,
    addCustomer,
    selectCustomer,
    getAll
  }
}