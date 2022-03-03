import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import './Popup.css'

export default function Create(props) {
  const [username, setFirstName] = useState('');
  const [email, setLastName] = useState('');
  // const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post(`https://jsonplaceholder.typicode.com/users`, {
      username, email
    })
  }
  return (
    <>
      <Form className="create-form popup-box mt-5 text-center">
        <div className='box'>
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'  type='text' value={'fddfd'} onChange={(e) => setFirstName(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'  type='text' value={'dfds'} onChange={(e) => setLastName(e.target.value)} />
          </Form.Field>
          {/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
          </Form.Field> */}
          <Button onClick={postData} type='submit'>Submit</Button>
        </div>
      </Form>
    </>
  )
}
