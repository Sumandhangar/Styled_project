import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import  './Popup.css'


export default function Update() {
    const [name, setName] = useState('');
    const [username, setusername] = useState('');
    const [id, setID] = useState(null);
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState(false);
    
    useEffect(() => {
      setID(localStorage.getItem('ID'))
      setName(localStorage.getItem('name'));
      setUsername(localStorage.getItem('username'));
      setEmail(localStorage.getItem('email'))
}, []);
 
    return (
        <div>
            <Form className="create-form popup-box" style={{}}>
                <div className='box'>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setusername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit'>Updasdste</Button>
                </div>
            </Form>
        </div>
    )
}