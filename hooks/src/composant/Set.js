 import {useState } from 'react'




 function Set (){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> you clicked {count} times </p>
            <button onClick= {()=> setCount(count+1)}>click me</button>
        </div>
    );
 }
 export default Set;