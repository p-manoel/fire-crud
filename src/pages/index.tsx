import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Customer from '../core/Customer'

const Home: NextPage = () => {
  const customers = [
    new Customer('Jack', 34, '1'),
    new Customer('Kevin', 35, '2'),
    new Customer('Dylan', 56, '3'),
    new Customer('Mike', 56, '4'),
  ]

  function selectedCustomer(customer: Customer) {
    console.log(`${customer.name} selected!`);
  }

  function deletedCustomer(customer: Customer) {
    console.log(`${customer.name} deleted!`);
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Next-crud'>
        <Table customers={customers} 
          selectedCustomer={selectedCustomer}
          deletedCustomer={deletedCustomer}
        />
      </Layout>
    </div>
  )
}

export default Home
