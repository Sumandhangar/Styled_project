import React, { useState, useEffect} from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import './Popup.css'

export default function Create(props) {
    const [data, setData] = useState([]);
    const [userId, setUserid] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [completed, setcompleted] = useState(false);
    const postData = (e) =>{
        e.preventDefault();
        const submitData = {userId,id,title,completed}
        console.log(submitData)
        axios.post(`https://jsonplaceholder.typicode.com/todos`, submitData)

        .then((res) =>{
            console.log(res)
           
        })
        .catch((err) =>{
            console.log(err)
        })
    }
       
    return (
        <div>
            <Form className="create-form popup-box mt-5">
                <div className='box'>
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setUserid(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setId(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    {/* <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/> */}
                    <input type='checkbox' onChange={(e) => setcompleted(!completed)}/>Remember
                </Form.Field>
                <Button onClick={postData} type='submit' >Submit</Button>
                </div>
            </Form>
        </div>
    )
}
