//generate a counter component react-native
import React from 'react';
import { View, Text, Button } from 'react-native';
import Counter from "react-native-counters";

const CounterComp = () => {
    const [count, setCount] = React.useState(0);
    function onChange(number, type) {
        console.log(number, type) // 1, + or -
    }
    return (
        <View>
            <Counter start={1} onChange={onChange} plus={'Add'}
                minus={'Decrease'}
                min={-100}
                max={100}
                buttonStyle={{
                    width: 100
                }} />
        </View>
    );
}

export default CounterComp;