import React from 'react';
import {Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text, Icon, FormButton} from "./SignInElements";
import App from '../src';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">FoodSpace</Icon>
                        <FormContent>
                           <Form action="#">
                               <FormH1>Sign In to your account</FormH1>
                               <FormLabel htmlFor='for'>Email</FormLabel>
                               <FormInput
                                   type='email' required
                                   onChange = {(e) => {
                                       setUsername(e.target.value);
                                   }}
                               />
                               <FormLabel htmlFor='for'>Password</FormLabel>
                               <FormInput
                                   type='password' required
                                   onChange = {(e) => {
                                       setPassword(e.target.value);
                                   }}
                               />
                               <FormButton onClick={signin} type='submit'>Continue</FormButton>
                               <h1>{SignInStatus}</h1>
                           </Form>
                        </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;