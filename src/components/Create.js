import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
const Create = (props) => {
    const [checkbox, setCheckbox] = useState(true);
  const validateEmployee = (empData) => {
    const errors = {};

    if (!empData.name) {
      errors.name = "Please Enter Username";
    } else if (empData.name.length > 20) {
      errors.name = "Name cannot exceed 20 characters";
    }
    if (!empData.username) {
      errors.username = "Please Enter Username";
    } else if (empData.username.length > 20) {
      errors.username = "Name cannot exceed 20 characters";
    }
    // const exists = empData.state.email.find(email => email === empData.email);
    if (!empData.email) {
      errors.email = "Please Enter Email ID";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!empData.address) {
      errors.address = "Please Enter Employee address";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      username: "",
      email: "",
      address: "",
    //   checkbox: checkbox
    },
    validate: validateEmployee,
    onSubmit: (values) => {
      axios
        .post(
          `https://621f2e89311a70591403536e.mockapi.io/database`,values
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="popup-box mt-5">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
         
            <label htmlFor="Name">Name : </label>
            <input
              type="text"
              name="name"
              id="Name"
              value={formik.touched.name && formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.errors.name ? (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            ) : null}
            <br></br>
            <p></p>
          
            <label htmlFor="Name">Username : </label>
            <input
              type="text"
              name="username"
              id="Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.errors.username ? (
              <span style={{ color: "red" }}>{formik.errors.username}</span>
            ) : null}
            <br></br>
            <p></p>
          
            <label htmlFor="EmailId">Employee Email ID : </label>
            <input
              type="text"
              name="email"
              id="EmailId"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.errors.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
            <br></br>
            <p></p>
          <label htmlFor="address">Employee address : </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.errors.address ? (
            <span style={{ color: "red" }}>{formik.errors.address}</span>
          ) : null}
          <p></p>
          <br/>
          <input type="checkbox" onChange={(e) => setCheckbox(!checkbox)} />
          Remember<br/>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
};

export default Create;
