import { View, Image, Text, ScrollView } from 'react-native'
import Header from '../components/Home/header'
import StoryCard from '../components/Home/StoryCard'

const HomeScreen = () => {

  const stories =[
    {
      name: 'bijouxbaidoe',
      id:1,
      img:require('../assets/images/prof1.jpg')
    },
    {
      name: 'kenneth.may',
      id:2,
      img:require('../assets/images/prof2.jpg')
    },
    {
      name: '1kerwinodoom',
      id:3,
      img:require('../assets/images/prof3.jpg')
    },
    {
      name: 'mr.edisi',
      id:4,
      img:require('../assets/images/prof4.jpg')
    },
    {
      name: 'berimaseanbills',
      id:5,
      img:require('../assets/images/prof5.jpg')
    },
    {
      name: 'iphonedj',
      id:6,
      img:require('../assets/images/prof6.jpg')
    },
    {
      name: 'blac.volta',
      id:7,
      img:require('../assets/images/prof7.jpg')
    },
    {
      name: 'torsu.dee',
      id:8,
      img:require('../assets/images/prof8.jpg')
    },
    {
      name: 'ernestboamahgaisie',
      id:9,
      img:require('../assets/images/prof9.jpg')
    },
  ]
  return (
    <View className='flex-1 px-2 pt-10 bg-[#0f0f0f]'>
        
      <Header />

      {/* Stories */}
      <ScrollView className='flex-row mt-3' horizontal showsHorizontalScrollIndicator={false}>
        {stories.map(story => <StoryCard key={story.id} img={story.img} name={story.name} id={story.id} />)}
      </ScrollView>
      

    </View>
  )
}

export default HomeScreen