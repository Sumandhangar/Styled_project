import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Rquired"),
    username: Yup.string().required("Rquired"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Rquired"),
    address: Yup.string().required("Rquired"),
    checkbox: Yup.boolean().required("Rquired"),
  });

  //  console.log(props)
  return (
    <div className="form-wrapper popup-box ">
      <div className="box">
        <Formik {...props} validationSchema={validationSchema}>
          <Form>
            <FormGroup className='d-flex mb-3'>
              <label htmlFor="name" className="pr-5">Name</label>
              <Field name="name" type="text"
                className="form-control w-75 ml-1" />
              <ErrorMessage
                name="name"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup className="d-flex mb-3">
              <label htmlFor='name' className="pr-5">UserId</label>
              <Field name="username" type="text"
                className="form-control w-75" />
              <ErrorMessage
                name="username"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup className="d-flex mb-3">
              <label htmlFor='name' className="pr-5">Email</label>
              <Field name="email" type="email"
                className="form-control w-75 ml-2" />
              <ErrorMessage
                name="email"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup className="d-flex mb-3">
              <label htmlFor='name' className="pr-4">Address</label>
              <Field name="address" type="text"
                className="form-control w-75 ml-3" />
              <ErrorMessage
                name="address"
                className="d-block invalid-feedback"
                component="span"
              />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center mb-3">
              <Field name="checkbox" type="checkbox"
                className=" mt-1" />
              <label htmlFor='checkbox' className=" pl-2">Remember</label>
            </FormGroup>
            <Button variant="danger" size="lg"
              block="block" type="submit">
              {props.children}
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default StudentForm;