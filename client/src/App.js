import React, {useState} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignInPage from "./pages/signin";
// import Navbar from "./components/Navbar";
import Axios from 'axios'

function App() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [SignInStatus, setSignInStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    const signin = () => {
        Axios.post('http://localhost:3001/signin', {
            username: username,
            password: password,
        }).then((response) => {

            if(response.data.message){
                setSignInStatus(response.data.message);
            } else {
                setSignInStatus(response.data[0].username);
            }
        });
    };


    return (
    <Router>
        {/*<Navbar />*/}
        <Routes>
            <Route path='/' element={<Home/>} exact />
            <Route path='/signin' element={<SignInPage/>} exact />
        </Routes>
    </Router>
  );
}

export default App;
