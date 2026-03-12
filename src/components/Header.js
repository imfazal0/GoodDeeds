import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'


const Header = () => {
    let [userData , setUserData] = useState('name');
    useEffect(()=>{
        const setData =  async()=>{
            setUserData(JSON.parse(await AsyncStorage.getItem('name')))            
        }
        setData();
    },[]);

  return (
    <View className='w-full h-[10%] bg-white flex flex-row justify-between' >
      <View className='w-1/4 h-full p-[5%] flex flex-row' >
        <Image source={require('../../assets/pf.png')} className='w-full h-full border border-gray-500 aspect-square rounded-full' />
        <View className='h-full flex justify-center pl-[15%]'>
        <Text className='text-black font-extrabold text-2xl'>{userData.name}</Text>
        <Text className='text-gray-500 font- text-l'>Age:{userData.age}</Text>
        </View>
      </View>
      <View className='w-1/4 h-full bg-yellow-400'>

      </View>
    </View>
  )
}

export default Header

