function Random() { 
    let number = Math.random()*100;
    return (
        <div>
            <h2 style={{'backgroundColor':'blue'}}>Random Number: {Math.round(number)}</h2>
        </div>
    );
}
export default Random;