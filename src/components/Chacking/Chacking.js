import React, { useState } from 'react';

const Chacking = () => {

    const [count, setCount] = useState(0);
    // long System ::: 
    // const minus = () => {
    //     const oldCount = count;
    //     const newCount = oldCount - 1;
    //     setCount(newCount)
    // }


    // shortSystem : 
    // const minus = () => setCount(count - 1) ;


    const plus = () => setCount(count + 1) ;
   
    console.log(count);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus} className='ms-3 p-3' >+</button>
            <button onClick={()=> setCount(count - 1)} className='ms-3 p-3'>-</button>
        </div>
    );
};

export default Chacking;