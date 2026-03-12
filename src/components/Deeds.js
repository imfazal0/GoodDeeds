import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Deeds = ({ item }) => {

  return (
    <View className="w-full bg-white rounded-xl p-[5%] mb-4">

      <Text className="font-semibold">
        Deeds : {item.id}
      </Text>

      <View className="py-6 items-center">
        <Text className="font-extrabold text-black text-4xl">
          {item.highlight.ur}
        </Text>
      </View>

      <View className="flex-row justify-between items-center">
        <Text>Reference : {item.reference}</Text>

        <Pressable className="bg-blue-600 px-4 py-2 rounded-full">
          <Text className="text-white font-bold">View Full</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default Deeds