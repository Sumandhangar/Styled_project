import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <Navbar/>
    <FormContainer>
      <FormWrap>
        <Icon to='/'>myLogo</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' reqquired />
            <FormLabel htmlFor='for'>Passowrd</FormLabel>
            <FormInput type='password' reqquired />
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </FormContainer>
    </>
  )
}
const FormContainer = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
top: 0;
left: 0;
right: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(180deg, rgba(1,147,86,1)0%,rgba(10,201,122,1)100%);
`
const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media acreen and (max-width:400px){
  height: 80%;
}
`
const Icon = styled.logo`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;

`
const FormContent = styled.div`

`
const Form = styled.div`

`
const FormH1 = styled.h1`

`
const FormLabel = styled.label`

`
const FormInput = styled.input`

`
const FormButton = styled.button`

`
const Text = styled.text`

`
export default Signin