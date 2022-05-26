import React from 'react';
import {Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text, Icon, FormButton, SigninLink} from "./SignUpElements";
import Background from '../../assets/restaurant_bg.png'
import {HeroBg, ImageBg} from "../HeroSection/HeroElements";

const SignUp = () => {
  return (
    <>
      <HeroBg>
        <ImageBg src={Background}/>
      </HeroBg>
      <Container>
        <FormWrap>
          <Icon to="/">FoodSpace</Icon>
            <FormContent>
              <Form action="#">
                <FormH1>Create your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required />
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' required />
                <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                <FormInput type='password' required />
                <FormButton type='submit'>Continue</FormButton>
                <Text>Already have an Account?
                  <SigninLink id='Links-signin' to='/signin'>Sign In</SigninLink>   
                </Text> 
              </Form>
            </FormContent>
      </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;