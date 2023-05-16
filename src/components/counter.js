import React,{useState,useMemo} from 'react'

const Counter = () => {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const increamentCounterOne = () => {
        setCounterOne(counterOne+1);
    }

    const increamentCounterTwo = () => {
        setCounterTwo(counterTwo+1);
    }
     
    const isEven =  useMemo(() => {
        let i = 0;
        while(i<2000000000) i++;
        return counterOne%2 === 0
    },[counterOne]);


    return(
        <div>
            <div>
                <button onClick={increamentCounterOne}>CounterOne - {counterOne}</button>
                <span>{isEven ? "Even":"Odd"}</span>
            </div>
            <div>
                <button onClick={increamentCounterTwo}>CounterTwo - {counterTwo}</button>
            </div>

        </div>
    )
}

export default Counter