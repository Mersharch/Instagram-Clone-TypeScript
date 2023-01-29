import { View, Text, Image } from 'react-native'
import React from 'react'

interface Props {
    src: string
}

const Iconx = ({src} : Props) => {
  return (
    <View>
        <Image 
            source={src} 
            className='w-8 h-7'
        />

    </View>
  )
}

export default Iconx