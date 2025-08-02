import React, { useEffect, useRef, useState } from 'react';
import Component3 from './Component3';
import UserContext from '../context/UserContext';

function Component2() {
  const [count, setCount] = useState(0);

  // useRef to persist value
  const aRef = useRef(5);
  const bRef = useRef(null); // Not used in this example
  const cRef = useRef(null); // N

  useEffect(() => {
    console.log("Component2 mounted");

    const currentElemet = bRef.current;
    const currentDom = currentElemet?.getElementsByTagName('div') ? currentElemet.getElementsByTagName('div')[0] : null;
    console.log("currentDom:", currentDom);

    if(currentDom){
       currentDom.classList.add('active444');
       currentDom.style.color = 'red';
    }
    console.log("bRef current element:", );

    aRef.current = 10; // Update the ref value
  

    return () => {
      console.log("Component2 unmounted");
    };
  }, [count]);

  console.log("Component2 render",cRef.current);


  return (
    <div ref={bRef} >
      <UserContext.Consumer>
        {value => (
          <div>
            <p>Value from context: {JSON.stringify(value)}</p>
          </div>
        )}
      </UserContext.Consumer>

      <h2>Component 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>Value of a (useRef): {aRef.current}</p>
      <button onClick={() => aRef.current++}>Increment `a` (no re-render)</button>

      <Component3 ref={cRef} />
    </div>
  );
}

export default Component2;
