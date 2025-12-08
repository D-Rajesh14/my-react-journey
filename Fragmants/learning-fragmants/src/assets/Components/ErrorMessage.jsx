import foodItems from "./FoodItems"

const ErrorMessage = () => {
      let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Fruits'];
 
    return <>  {foodItems.length === 0 && <h1>No Food Items Available</h1>}   
    </>;
}
export default ErrorMessage;