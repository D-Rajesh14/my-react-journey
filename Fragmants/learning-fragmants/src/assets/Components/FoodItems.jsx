import Item from "./items";   

const foodItems = () => {
    let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Fruits'];
 
   return ( <ul className="list-group">
  {foodItems.map((item)=>(
   <Items foodItems={item}></Items>
  ))}
   
</ul>
   );       
};
export default foodItems;