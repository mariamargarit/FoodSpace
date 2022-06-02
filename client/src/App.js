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
import BrokeVegetarianBreakfastPage from "./pages/brokevegetarianbreakfast";
import RichVegetarianBreakfastPage from "./pages/richvegetarianbreakfast";
import BrokeVeganBreakfastPage from "./pages/brokeveganbreakfast";
import RichVeganBreakfastPage from "./pages/richveganbreakfast";
import BrokeVegetarianLunchPage from "./pages/brokevegetarianlunch";
import RichVegetarianLunchPage from "./pages/richvegetarianlunch";
import BrokeVeganLunchPage from "./pages/brokeveganlunch";
import RichVeganLunchPage from "./pages/richveganlunch";

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
                <Route path='/richvegan' element={<RichVeganMealPage/>} exact/>
                <Route path='/brokevegetarianbreakfast' element={<BrokeVegetarianBreakfastPage/>} exact/>
                <Route path='/richvegetarianbreakfast' element={<RichVegetarianBreakfastPage/>} exact/>
                <Route path='/brokeveganbreakfast' element={<BrokeVeganBreakfastPage/>} exact/>
                <Route path='/richveganbreakfast' element={<RichVeganBreakfastPage/>} exact/>
                <Route path='/brokevegetarianlunch' element={<BrokeVegetarianLunchPage/>} exact/>
                <Route path='/richvegetarianlunch' element={<RichVegetarianLunchPage/>} exact/>
                <Route path='/brokeveganlunch' element={<BrokeVeganLunchPage/>} exact/>
                <Route path='/richveganlunch' element={<RichVeganLunchPage/>} exact/>

            </Routes>
        </Router>
    );
}

export default App;