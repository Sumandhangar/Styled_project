import React,{useState,useEffect} from 'react'
import axios from 'axios'
import StudentForm from './Form';
import './Popup.css'
import { boolean } from 'yup';

const Create = (props) => {
  const [formValues,setFormValues] = useState({
    name:'',username:'',email:'',address:''})
    const onSubmit = studentObject =>{
      axios.post('https://62289f859fd6174ca82a068c.mockapi.io/database', studentObject)
      .then(res =>{
        if(res.status === 200){
          alert("user created successfully")
        }else Promise.reject()
      })
      .catch(err=> alert("something went wrong"))
    }
    
  return (
    <>
    <div className='popup-box mt-5'>
      <div className='box'>
      <span className="close-icon" onClick={props.handleClose}>x</span>
      <StudentForm className='mt-5' initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize
      > 
      Create Student
     
    </StudentForm>
      </div>
    </div>
   
   </>

  )
}

export default Create

