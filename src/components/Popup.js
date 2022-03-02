import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import './Popup.css'

export default function Create(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
      firstName, lastName, checkbox
    })
  }
  return (
    <div>
      <Form className="create-form popup-box mt-5 text-center">
        <div className='box'>
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
          </Form.Field>
          <Button onClick={postData} type='submit'>Submit</Button>
        </div>
      </Form>
    </div>
  )
}
