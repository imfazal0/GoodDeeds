import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Deeds from './Deeds'
import { useContext } from 'react'
import deeds from '../context/defalutData'

const DeedsGrid = () => {
    const context = useContext(deeds);
  return (
   
    <View className='flex-1'>     
    <ScrollView className='flex-1 p-[2%]'>
                {context.data.map((item)=>{
                    return(<Deeds item={item} />)
                })}
    </ScrollView>
    </View>
  )
}

export default DeedsGrid

const styles = StyleSheet.create({})