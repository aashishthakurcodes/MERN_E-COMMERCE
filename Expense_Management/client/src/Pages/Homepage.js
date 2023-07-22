import React ,{useState}from 'react'
import Layout from '../Component/Layout/Layout.js'
import { Modal,Form, Input, Select, message } from 'antd'
import axios from 'axios'
import Loading from "../Component/Layout/Loading.js"

const Homepage = () => {
  const [showModel,setShow]=useState(false)
  const [loading,setLoading]=useState(false)

  //Submitbtn 
  const handleSubmit =async (values) => {
   try {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log("User ID:", user._id); 
    setLoading(true)
    await axios.post('/transections/add-data',{...values, userid: user._id})
    setLoading(false)
    message.success("Transaction Added successfully")
    setShow(false)
   } catch (error) {
    setLoading(false)
    message.error("Faild to add transection")
   }
  };
  
  return (
    <Layout>
      {loading  && <Loading/>}
      <div className='filters'>
   
      </div>
      <div>
        <button onClick={()=>setShow(true)}>Add New </button>
      </div>
      <div className='content'>

      </div>
      <Modal title="Add Transection" open={showModel} onCancel={()=>setShow(false)} footer={false}>
        <Form layout='vertical' onFinish={handleSubmit}>
          <Form.Item label='Amount' name='amount'>
            <Input type='text'/>
          </Form.Item>

          <Form.Item label='Type' name='type'>
            <Select>
              <Select.Option value="income" >INCOME</Select.Option>
              <Select.Option value="expense" >EXPENSE</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Category' name='category'>
            <Select>
              <Select.Option value="salary" >Salary</Select.Option>
              <Select.Option value="food" >Food</Select.Option>
              <Select.Option value="entertainment" >Entertainment</Select.Option>
              <Select.Option value="bills" >Bills</Select.Option>
              <Select.Option value="miscellaneous" >Miscellaneous</Select.Option>
              <Select.Option value="fees" >Fees</Select.Option>
              <Select.Option value="rent" >Rent</Select.Option>
              <Select.Option value="medical" >Medical</Select.Option>
              <Select.Option value="tax" >Tax</Select.Option>
              <Select.Option value="grocery" >Grocery</Select.Option>
            </Select>
          </Form.Item>


          <Form.Item label='Reference' name='reference'>
            <Input type='text'/>
          </Form.Item>

          <Form.Item label='Description' name='description'>
            <Input type='text'/>
          </Form.Item>

          <Form.Item label='Date' name='date'>
            <Input type='date'/>
          </Form.Item>


          <div>
          <button type='submit'>{" "}Save</button>
        </div>

        </Form>
       

      </Modal>
    </Layout>
  )
}

export default Homepage