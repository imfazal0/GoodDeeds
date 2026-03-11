import { Text } from "react-native"
import { SafeAreaView  } from "react-native-safe-area-context"
import "./global.css"

const App = () => {
  return (
    <SafeAreaView className='w-screen h-screen '>
        <Text>Hello world</Text>
    </SafeAreaView>
  )
}

export default App
