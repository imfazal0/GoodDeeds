import AsyncStorage from '@react-native-async-storage/async-storage'
import {useState } from 'react'
import {  KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const InformationForm = () => {
    const [userData,setUserData ] = useState({
        name:'',
        age: '',
    })
   

    function handleName(name){
            setUserData(prev=>({name:name,age:prev.age}));
    }

    function handleAge(age){
            setUserData(prev=>({name:prev.name,age:age}));
    }

    function handleContinue(){
        AsyncStorage.setItem("name",JSON.stringifyuserData)
        AsyncStorage.setItem('firstTimeOpen' , 'true')
    }

    return (
        <SafeAreaView className='w-full h-full flex items-center bg-[#DEEDF2] p-5'>
            <KeyboardAvoidingView className='w-full h-full flex items-center bg-[#DEEDF2] '>
            <View className='w-full h-1/2 flex border p-[5%] border-blue-500 rounded-3xl gap-[5%]'>
                <Text className='text-2xl font-bold' >Enter Your Name</Text>
                <TextInput onChangeText={handleName} className='bg-gray-200 pl-5 text-2xl font-bold border-2 rounded-xl h-[15%] w-full border-gray-300' />
                <Text className='text-2xl font-bold' >Enter Your Age</Text>
                    <TextInput onChangeText={handleAge} keyboardType='numeric' className='bg-gray-200 pl-5 text-2xl font-bold border-2 rounded-xl h-[15%] w-1/4 border-gray-300' />
                <Pressable onPress={handleContinue} className='w-4/5 h-[15%] bg-blue-600 rounded-full  self-center justify-center flex items-center'>
                    <Text className='text-white font-extrabold text-2xl'>Continue</Text>
                </Pressable>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default InformationForm

const styles = StyleSheet.create({})