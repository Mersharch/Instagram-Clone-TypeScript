import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
    const navigation = useNavigation()
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className='mt-20'>
            <Text>SignIn</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignIn