import { View,  ScrollView } from 'react-native'
import Header from '../components/Home/header'
import Post from '../components/Home/Post'
import StoryCard from '../components/Home/StoryCard'
import { stories, posts } from '../data'

const HomeScreen = () => {

  
  return (
    <View className='flex-1 px-2 pt-10 bg-[#0f0f0f]'>
        
      <Header />
      <ScrollView className='mt-3'>

        {/* Stories */}
        <View>
          <ScrollView className='flex-row mt-3' horizontal showsHorizontalScrollIndicator={false}>
            {stories.map(story => <StoryCard key={story.id} id={story.id} img={story.img} name={story.name} />)}
          </ScrollView>
        </View>
        

        {/* Posts */}

        <View>
          {posts.map(post => <Post key={post.id} post={post}/>)}
        </View>
      </ScrollView>
      

    </View>
  )
}

export default HomeScreen