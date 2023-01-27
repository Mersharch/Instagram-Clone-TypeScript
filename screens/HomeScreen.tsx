import { View, Image } from 'react-native'

const HomeScreen = () => {
  return (
    <View className='flex-1 px-2 pt-10 bg-[#0f0f0f]'>
        <Image 
            source={require('../assets/images/logo-txt.png')} 
            className="h-10 w-32" 
        />

    </View>
  )
}

export default HomeScreen