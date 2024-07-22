
import './App.css';
import DailyIntake from './components/DailyIntake';
import Login from './components/Login';
import NutritionForm from './components/NutritionForm';
import Result from './components/Result';
import Signup from './components/Signup';



function App() {
  return (
    <>
    <Signup/>
    <Login/>
    <NutritionForm name={"Akriti"}/>
    <DailyIntake/>
    <Result/>
    </>
  );
}

export default App;
