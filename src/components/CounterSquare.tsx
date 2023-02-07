import React from 'react';
import {useSelector} from 'react-redux';

export const CounterSqure: React.FC = () => {
    const count = useSelector<any,number>(state => state.counter.count)
    
    return <p> count ^ 2 = {count ** 2}</p>
}