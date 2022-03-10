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
        axios.get(`https://62289f859fd6174ca82a068c.mockapi.io/database/${id}`, {
            name,
            username,
            email,
            address,
            checkbox
        })
    }

    return (
        <div className="container   text-center">
            <div className='row'>
                <div className='col-lg-12 '>
                    <div className='popup-box'>
                        <div className='box'>
                            <span className="close-icon" onClick={props.handleClose}>x</span>
                            <ul>
                                <li className='d-flex border-left border-top border-right'>
                                    <label className='pl-2 pt-2'>ID</label>
                                    <p className='pr-2 pt-2'>{id}</p>
                                </li>
                                <li className='d-flex border-top border-left border-right'>
                                    <label className='pl-2 pt-2'>Name</label>
                                    <p className='pr-2 pt-2'>{name}</p>
                                </li>
                                <li className='d-flex border-top border-left border-right'>
                                    <label className='pl-2 pt-2'>Username</label>
                                    <p className='pr-2 pt-2'>{username}</p>
                                </li>
                                <li className='d-flex border-top border-left border-right'>
                                    <label className='pl-2 pt-2'>Email</label>
                                    <p className='pr-2 pt-2'>{email}</p>
                                </li>
                                <li className='d-flex border-top border-left border-right'>
                                    <label className='pl-2 pt-2'>Address</label>
                                    <p className='pr-2 pt-2'>{address}</p>
                                </li>
                                <li className='d-flex border'>
                                    <label className='pl-2 pt-2'>Status</label>
                                    <p className='pr-2 pt-2'>{checkbox}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}