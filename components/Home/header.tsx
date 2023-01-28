import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Iconx from '../Iconx'

const Header = () => {
    const addIcon = require('../../assets/images/icons8-add-new-50.png')
    const heartIcon = require('../../assets/images/icons8-favorite-30.png')
    const chatIcon = require('../../assets/images/icons8-facebook-messenger-50.png')
  return (
    <View className='flex-row w-[100%] items-center justify-between'>
        <Image 
            source={require('../../assets/images/logo-txt.png')}
            className="w-32 h-10"
        />
        <View className='flex-row items-center'>
            <TouchableOpacity>
                <Iconx src={addIcon} />
            </TouchableOpacity> 

            <TouchableOpacity>
                <Iconx src={heartIcon} />
            </TouchableOpacity>  

            <TouchableOpacity>
                <Iconx src={chatIcon} />
            </TouchableOpacity>            
        </View>
    </View>
  )
}

export default Header