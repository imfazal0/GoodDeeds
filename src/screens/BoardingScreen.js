import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import GetStartedScreen from '../components/GetStartedScreen'
import { useState } from 'react'
import InformationForm from '../components/InformationForm';


const BoardingScreen = () => {
  const [currentPage , setCurrentPage] = useState(false);

  return (
    <View>
      {currentPage && <GetStartedScreen/>}
      <InformationForm/>
    </View>
  )
}

export default BoardingScreen
