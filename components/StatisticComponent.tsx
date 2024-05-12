import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CircularProgress from 'react-native-circular-progress-indicator'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

const StatisticComponent = ({ totalElement, numberOfElement }) => {
    const [fill, setFill] = useState(50);
    const intervalRef = useRef(null);
    useEffect(() => {
        setFill(numberOfElement / totalElement * 100)
    })
    // useEffect(() => {
    //     intervalRef.current = setInterval(() => {
    //         console.log('dem');
    //         setFill(prevSeconds => prevSeconds + 1);
    //     }, 1000);
    //     return () => {
    //         clearInterval(intervalRef.current);
    //     };
    // }, []);
    // useEffect(() => {
    //     if (fill >= 100) {
    //         console.log("Ket thuc");
    //         clearInterval(intervalRef.current);
    //     }
    // }, [fill])
    return (
        <View>
            <AnimatedCircularProgress
                rotation={180}
                size={120}
                width={15}
                fill={fill}
                tintColor="#00e0ff"
                onAnimationComplete={() => { }}

            >
                {
                    () => (
                        <Text>
                            {`${numberOfElement}/${totalElement}`}
                        </Text>
                    )
                }

            </AnimatedCircularProgress>
        </View>
    )
}

export default StatisticComponent

const styles = StyleSheet.create({})