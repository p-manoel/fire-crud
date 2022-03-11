import type { NextPage } from 'next'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useCustomers from '../hooks/useCustomers'

const Home: NextPage = () => {
  const {
    table,
    showTable,
    customer,
    customers,
    selectCustomer,
    saveCustomer,
    deletedCustomer,
    addCustomer 
  } = useCustomers();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Fire-crud'>
        {table ? (
           <>
           <div className='flex justify-end'>
             <Button color='green' className='mb-4' onClick={addCustomer}>New Customer</Button>
           </div>
           <Table customers={customers} 
             selectedCustomer={selectCustomer}
             deletedCustomer={deletedCustomer}
           />
         </>
        ) : (
          <Form
            customer={customer}
            changedCustomer={saveCustomer}
            canceled={showTable}
          />
        )}
       
        
      </Layout>
    </div>
  )
}

export default Home
