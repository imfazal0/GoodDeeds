import { Text } from "react-native"
import { SafeAreaView  } from "react-native-safe-area-context"
import "./global.css"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import BoardingScreen from "./src/screens/BoardingScreen"
import { StatusBar } from "expo-status-bar"
import MainScreen from "./src/screens/MainScreen"

const App =  () => {
    const [boardingScreen, setBoardingScreen] = useState(true);
    useEffect(() => {
    const data = async () => {
      const data = await AsyncStorage.getItem('firstTimeOpen')
      setBoardingScreen(Boolean(data))
    };
    data();

  }, [])

  return (
    <>
   {!boardingScreen && <BoardingScreen setBoardingScreen={setBoardingScreen} boardingScreen={boardingScreen} />}
   {boardingScreen && <MainScreen/>}
    <StatusBar style="auto"/>
    </>
  )
}

export default App
