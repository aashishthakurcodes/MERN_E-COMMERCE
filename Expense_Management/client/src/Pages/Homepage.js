import React ,{useState}from 'react'
import Layout from '../Component/Layout/Layout.js'
import { Modal } from 'antd'

const Homepage = () => {
  const [showModel,setShow]=useState(false)
  return (
    <Layout>
      <div className='filters'>
   
      </div>
      <div>
        <button onClick={()=>setShow(true)}>Add New </button>
      </div>
      <div className='content'>

      </div>
      <Modal title="Add Transection" visible={showModel} onCancel={()=>setShow(false)}>
 <h1>Add New Transaction</h1>
      </Modal>
    </Layout>
  )
}

export default Homepage