import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import './Popup.css'
import { boolean } from 'yup/lib/locale';


export default function Update(props) {
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('name'));
        setUsername(localStorage.getItem('username'));
        setEmail(localStorage.getItem('email'))
        setAddress(localStorage.getItem('email'))
        setCheckbox(localStorage.getItem('checkbox'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://62289f859fd6174ca82a068c.mockapi.io/database/${id}`, {
            name,
            username,
            email,
            address,
            checkbox
        })
            .then((id) => {
                if (id.status === 200) {
                    alert("Student updated successfully");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    }

    return (
        <div className="create-form popup-box  text-center">
            <div className='box'>
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <Form className="create-form popup-box" style={{}}>
                    <div className='box'>
                        <Form.Field className='d-flex mb-3'>
                            <label htmlFor="name" className="pr-5">Name</label>
                            <input placeholder='name' className='form-control w-75 ml-5' value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Field>
                        <Form.Field className='d-flex mb-3'>
                            <label htmlFor="name" className="pr-5">Username</label>
                            <input placeholder='User Name' className='form-control w-75 ml-3' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Field>
                        <Form.Field className='d-flex mb-3'>
                            <label htmlFor="name" className="pr-5">Email</label>
                            <input placeholder='Email' className='form-control w-75 ml-5' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Field>
                        <Form.Field className='d-flex mb-3'>
                            <label htmlFor="name" className="pr-4">Address</label>
                            <input placeholder='address' className='form-control w-75 ml-5' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Field>
                        <Form.Field className='d-flex justify-content-center mb-3'>
                            <input placeholder='checkbox' type='checkbox' className='mt-1' value={checkbox} onChange={(e) => setCheckbox(e.target.value)} />
                            <label htmlFor="checkbox" className="pl-2">Remember</label>
                        </Form.Field>
                        <Button type='submit' className='btn btn-success' onClick={updateAPIData}>Update</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}