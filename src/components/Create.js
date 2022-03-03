import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import './Popup.css'

export default function Create(props) {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const submitData = { id,name,username, email,address }
    const postData = () => {
        console.log(submitData)
        axios.post(`https://621f2e89311a70591403536e.mockapi.io/database`, submitData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
// *****************************************
    return (
        <div>
            <Form className="create-form popup-box mt-5">
                <div className='box'>
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    <Form.Field>
                        <label>Id</label>
                        <input placeholder='UserId' className='ml-5' onChange={(e) => setId(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='name' className='ml-5' onChange={(e) => setName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Address</label>
                        <input placeholder='address' onChange={(e) => setAddress(e.target.value)} />
                    </Form.Field>
                  <Form.Field>
                    <input type='checkbox' onChange={() => setCheckbox(!checkbox)}/>Remember
                    </Form.Field>
                    <Button onClick={postData} type='submit' >Submit</Button>
                </div>
            </Form>
        </div>
    )
}
