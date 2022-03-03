import React, { useState} from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import './Popup.css'

const Popup = props => {
//  ***************************************
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  //   const [email, setEmail] = useState('');
  // const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post(`https://621f2e89311a70591403536e.mockapi.io/database`, {
      name,username,email
    })
  }
  const setData = (curElem) => {
    console.log(curElem)
 }



  return (
    <>
      <Form className="create-form popup-box mt-5 text-center">
        <div className='box'>
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <Form.Field>
            <label>First Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'  type='text' value={'dfds'} onChange={(e) => setUsername(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='email'  type='email' value={'dfds'} onChange={(e) => setEmail(e.target.value)} />
          </Form.Field>
          {/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
          </Form.Field> */}
          <Button onClick={postData} type='submit'>Submit</Button>
          {/* <button onClick={() => setData(curElem)}>Data</button> */}
        </div>
      </Form>
    </>
  )
}
export default Popup;