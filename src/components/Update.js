import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import  './Popup.css'


export default function Update(props) {
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    
    useEffect(() => {
      setID(localStorage.getItem('ID'))
      setName(localStorage.getItem('name'));
      setUsername(localStorage.getItem('username'));
      setEmail(localStorage.getItem('email'))
      setAddress(localStorage.getItem('email'))
}, []);

const updateAPIData = () => {
    axios.put(`https://62289f859fd6174ca82a068c.mockapi.io/database/${id}`, {
       name,
        username,
         email,
         address
	})
}
 
    return (
        <div className="create-form popup-box  text-center">
        <div className='box'>
          <span className="close-icon" onClick={props.handleClose}>x</span>
            <Form className="create-form popup-box" style={{}}>
                <div className='box'>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='name'  value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>UserName</label>
                    <input placeholder='User Name'  value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Updasdste</Button>
                </div>
            </Form>
        </div>
        </div>
    )
}