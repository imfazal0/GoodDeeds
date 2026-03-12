import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import DeedsGrid from '../components/DeedsGrid'
import DefaultDataContext from '../context/DefaultDataContext'

const MainScreen = () => {


  return (
    <SafeAreaView>
    <View className='w-full h-full bg-gray-800'>
        <Header/>
        <DefaultDataContext>
        <DeedsGrid/>
        </DefaultDataContext>
    </View>
    </SafeAreaView>
  )
}

export default MainScreen


