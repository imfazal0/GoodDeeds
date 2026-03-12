import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import GetStartedScreen from '../components/GetStartedScreen'
import { useEffect, useState } from 'react'
import InformationForm from '../components/InformationForm';


const BoardingScreen = ({boardingScreen , setBoardingScreen}) => {
  const [currentScreen, setCurrentScreen] = useState(true);

  return (
    <>
      {!boardingScreen && <View>
        {currentScreen && <GetStartedScreen setCurrentScreen={setCurrentScreen} />}
        {!currentScreen && <InformationForm />}
      </View>}
    </>
  )
}

export default BoardingScreen
