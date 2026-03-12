import { Image, Text, View , Pressable } from 'react-native'


const GetStartedScreen = () => {
    return (
        <View className='w-full h-full flex items-center gap-5'>
            <Image className='h-3/5 w-full rounded-b-2xl' source={require('../../assets/BoardingScreen.jpeg')} />
            <Text className='font-extrabold text-4xl text-center  text-[#180A83] '>Follow the Sunnah Transform Your Day.</Text>
            <Text className='px-[10%] text-center text-[#180A83]'>Discover authentic daily Sunnah practices from the teachings of the Prophet ﷺ. Build small habits that bring barakah into your life and strengthen your connection with Allah every single day.</Text>
            <Pressable className='bg-yellow-400 w-2/4 h-[8%] rounded-full flex items-center justify-center' >
                <Text className='font-extrabold text-white text-4xl'>Get Started</Text>
            </Pressable>
            <View className='flex flex-row w-full justify-center gap-5'>
                <View className='w-8 h-4 bg-[#180A83] rounded-full'></View>
                <View className='w-4 h-4 bg-gray-500 rounded-full'></View>
            </View>
        </View>
    )
}

export default GetStartedScreen

