import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const MainScreen = () => {


  return (
    <SafeAreaView>
    <View className='w-full h-full bg-gray-800'>
        <Header/>
    </View>
    </SafeAreaView>
  )
}

export default MainScreen


