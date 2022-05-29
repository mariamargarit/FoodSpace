import React, {useState} from 'react';
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Text,
    Icon,
    FormButton
} from "./SignInElements";
import Background from '../../assets/restaurant_bg.png'
import {HeroBg, ImageBg} from "../HeroSection/HeroElements";
import Axios from 'axios'


const SignIn = () => {

    const [SignInStatus, setSignInStatus] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {

            if (response.data.message) {
                setSignInStatus(response.data.message);
            } else {
                setSignInStatus(response.data[0].username);
            }
        });
    };

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
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput
                                type='email' required
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput
                                type='password' required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <FormButton onClick={login} type='submit'>Continue</FormButton>
                            <Text>{SignInStatus}</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;