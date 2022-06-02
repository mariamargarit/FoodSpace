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
import BrokeVegetarianDessertPage from "./pages/brokevegetariandessert";
import RichVegetarianDessertPage from "./pages/richvegetariandessert";
import BrokeVeganDessertPage from "./pages/brokevegandessert";
import RichVeganDessertPage from "./pages/richvegandessert";
import SalataCartofiPage from "./pages/results/salatacartofi";
import SalataVeggiePage from "./pages/results/salataveggie";
import SalataRadacinoasePage from "./pages/results/salataradacinoase";
import SalataGreceascaPage from "./pages/results/salatagreceasca";
import ApplePiePage from "./pages/results/applepie";
import AcaiSmoothiePage from "./pages/results/acaismoothie";
import CauliflowerHummusPage from "./pages/results/cauliflowerhummus";
import FalalfelPage from "./pages/results/falafel";
import CiocoVegaPage from "./pages/results/ciocovega";
import ClatitePage from "./pages/results/clatite";
import TortPage from "./pages/results/tort";
import KebabPage from "./pages/results/kebab";
import ShaormaPage from "./pages/results/shaorma";
import BurgerVegetarianPage from "./pages/results/burgervegetarian";
import BurgerVeganPage from "./pages/results/burgervegan";
import PizzaFunghiPage from "./pages/results/pizzafunghi";
import VeganBowlPage from "./pages/results/veganbowl";
import SupaCremaPage from "./pages/results/supacrema";
import QuesadillaPage from "./pages/results/quesadilla";

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
                <Route path='/brokevegetariandessert' element={<BrokeVegetarianDessertPage/>} exact/>
                <Route path='/richvegetariandessert' element={<RichVegetarianDessertPage/>} exact/>
                <Route path='/brokevegandessert' element={<BrokeVeganDessertPage/>} exact/>
                <Route path='/richvegandessert' element={<RichVeganDessertPage/>} exact/>
                <Route path='/salatacartofi' element={<SalataCartofiPage/>} exact/>
                <Route path='/salataveggie' element={<SalataVeggiePage/>} exact/>
                <Route path='/salataradacinoase' element={<SalataRadacinoasePage/>} exact/>
                <Route path='/salatagreceasca' element={<SalataGreceascaPage/>} exact/>
                <Route path='/applepie' element={<ApplePiePage/>} exact/>
                <Route path='/acaismoothie' element={<AcaiSmoothiePage/>} exact/>
                <Route path='/cauliflowerhummus' element={<CauliflowerHummusPage/>} exact/>
                <Route path='/falafel' element={<FalalfelPage/>} exact/>
                <Route path='/ciocovega' element={<CiocoVegaPage/>} exact/>
                <Route path='/clatite' element={<ClatitePage/>} exact/>
                <Route path='/tort' element={<TortPage/>} exact/>
                <Route path='/kebabhrisca' element={<KebabPage/>} exact/>
                <Route path='/shaormavegan' element={<ShaormaPage/>} exact/>
                <Route path='/burgervegetarian' element={<BurgerVegetarianPage/>} exact/>
                <Route path='/burgervegan' element={<BurgerVeganPage/>} exact/>
                <Route path='/pizzafunghi' element={<PizzaFunghiPage/>} exact/>
                <Route path='/veganbowl' element={<VeganBowlPage/>} exact/>
                <Route path='/supacrema' element={<SupaCremaPage/>} exact/>
                <Route path='/quesadilla' element={<QuesadillaPage/>} exact/>

            </Routes>
        </Router>
    );
}

export default App;