

const foodItems = () => {
    let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Fruits'];
 
   return ( <ul className="list-group">
  {foodItems.map((item)=>(<li key={item} className="list-group-item">{item}</li>))}
  
</ul>
   );       
};
export default foodItems;