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
            <Counter start={1} onChange={onChange} plus={'+'}
                minus={'-'}
                min={-100}
                max={100} 
                buttonTextStyle={{
                    color: 'white',
                    fontSize: 20
                }}
                countTextStyle={{
                    color:'red',
                    fontSize: 20,
                }}
                buttonStyle={{
                    width: 40,
                    backgroundColor: 'black',
                    borderRadius: 20,
                    padding:5,
                    borderColor: 'black',
                }} />
        </View>
    );
}

export default CounterComp;