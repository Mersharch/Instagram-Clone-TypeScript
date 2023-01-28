import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  img: string,
  name: string,
  key:number
}

const StoryCard = ({img, name, key}: Props) => {
  return (
    <TouchableOpacity key={key} className='flex-col items-center w-min h-min mx-2 gap-2'>
      <Image 
        source={img}
        style={styles.img}
        resizeMode='contain'
      />
      <Text style={styles.txt}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default StoryCard


const styles = StyleSheet.create({
  img: {
    width:70,
    height:70,
    borderRadius:50,
    borderWidth:3,
    borderColor: '#f2503a'
  },
  txt: {
    color: 'white'
  }
})