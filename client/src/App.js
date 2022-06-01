import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import StarterQuestionPage from "./pages/starterquestion";
import VegDietPage from "./pages/vegdiettype";
import VegetarianBudgetPage from "./pages/vegetarianbudget";
import VeganBudgetPage from "./pages/veganbudget";
import BrokeVegetarianMealPage from "./pages/brokevegetarianmeal";
import RichVegetarianMealPage from "./pages/richvegetarianmeal";
import BrokeVeganMealPage from "./pages/brokeveganmeal";
import RichVeganMealPage from "./pages/richveganmeal";

//import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/signin' element={<SignInPage/>} exact/>
                <Route path='/signup' element={<SignUpPage/>} exact/>
                <Route path='/starterquestion' element={<StarterQuestionPage/>} exact/>
                <Route path='/vegdiet' element={<VegDietPage/>} exact/>
                <Route path='/vegetarianbudget' element={<VegetarianBudgetPage/>} exact/>
                <Route path='/veganbudget' element={<VeganBudgetPage/>} exact/>
                <Route path='/brokevegetarian' element={<BrokeVegetarianMealPage/>} exact/>
                <Route path='/richvegetarian' element={<RichVegetarianMealPage/>} exact/>
                <Route path='/brokevegan' element={<BrokeVeganMealPage/>} exact/>
                <Route path='/richvegan' element={<RichVeganMealPage    />} exact/>

            </Routes>
        </Router>
    );
}

export default App;