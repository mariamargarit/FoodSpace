import React from 'react';
import {Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text, Icon, FormButton} from "./SignInElements";
import Background from '../../assets/restaurant_bg.png'
import {HeroBg, ImageBg} from "../HeroSection/HeroElements";

const SignIn = () => {
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