import {useState} from 'react';

function Counter() {
    // const [user, setUser] = useState({name: "Roberto", age: 24}); //this returns an array with two values
    //count stores the default value (this is the variable)
    //setCount is how we change that value

    const [array, setArray] = useState([])

    return (
        <div>
            <h1>{array.toString()}</h1>
            <button onClick={() => { 
                setArray((prevArray) => [...prevArray, '+1']) //passing callback function to grab the previous array
                //spreading all the possible values in the array, and adding '+1' to the end
            }}>Increment</button>
            <button onClick={() => {
                setArray((prevArray) => [...prevArray, '-1'])
            }}>Decrement</button>
            <button>Reset</button>
        </div>
    );
}

export default Counter;