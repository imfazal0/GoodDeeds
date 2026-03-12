import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Deeds from './defalutData';
import { dataArray } from './data';

const DefaultDataContext = ({children}) => {
    const [data , setData] = useState(dataArray);
  return (
    <Deeds.Provider value={{data, setData}}>
        {children}
    </Deeds.Provider>
  )
}

export default DefaultDataContext