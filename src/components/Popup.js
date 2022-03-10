import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import './Popup.css'
import StudentForm from './Form'




const Popup = (props) => {
  const [formValues, setFormValues] = useState({
    id: '', name: '', username: '', email: '', address: '',
  });

  const onSubmit = (studentObject) => {
    axios.put("https://62289f859fd6174ca82a068c.mockapi.io/database" + props.match.params.id, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("user updated successfully");
          props.history.push("/Axios")
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"))
  }


  //  useEffect(() => {
  //    axios.get("https://62289f859fd6174ca82a068c.mockapi.io/database" + props.match.params.id)
  //    .then((res) => {
  //      const{name,username,email,address} = res.data;
  //      setFormValues({name,username,email,address});
  //    })
  //    .catch((err) => console.log(err));
  //  }, [])
  return (
    <>
      <div className="create-form popup-box  text-center">
        <div className='box'>
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <StudentForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
          >
            Update Student
          </StudentForm>
        </div>
      </div>

    </>
  )
}
export default Popup;