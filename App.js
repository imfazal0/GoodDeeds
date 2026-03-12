import { Text } from "react-native"
import { SafeAreaView  } from "react-native-safe-area-context"
import "./global.css"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import BoardingScreen from "./src/screens/BoardingScreen"
import { StatusBar } from "expo-status-bar"

const App =  () => {
  return (
    <>
    <BoardingScreen/>
    <StatusBar style="auto"/>
    </>
  )
}

export default App
