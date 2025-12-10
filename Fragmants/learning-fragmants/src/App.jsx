
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems.jsx';
import ErrorMessaage from './components/ErrorMessage.jsx';

function App() {
// let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Fruits'];
 
  return( 
    <>
    <h1>Healthy Food</h1>
    <ErrorMessaage></ErrorMessaage>
   <FoodItems></FoodItems>
   
</>
  );
}

export default App;
