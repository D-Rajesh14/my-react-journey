function Hello() {
    let marks = 90;
    const myName = "Rajesh";
    let fullName = ()=>
    {
        return "D Rajesh";
    }
  return (
   
    <div>
      <h2>Hello i am {myName}</h2>
      <p>Welcome {fullName()} to the Hello component!</p>
      marks:{marks}
    </div>
  );
}   
export default Hello;