import React from 'react';
import {Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text, Icon, FormButton} from "./SignInElements";

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
                               <FormInput type='email' required />
                               <FormLabel htmlFor='for'>Password</FormLabel>
                               <FormInput type='password' required />
                               <FormButton type='submit'>Continue</FormButton>
                               <Text>Forgot password</Text>
                           </Form>
                        </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;