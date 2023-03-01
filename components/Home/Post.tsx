import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Iconx from '../Iconx'
// import { PostType } from '../../types'



interface Props {
    post : {
        id: number;
        pp:string;
        name:string;
        img:string;
        likes?:number;
        caption?:string;
        comments?:  {
            comment:string;
            user:string
        }[];
        loc?:string;
    }
}

const Post = ({post}:Props) => {
  return (
    <View className='mt-6'>
        <PostHeader pp={post.pp} name={post.name} loc={post.loc ? post.loc : ''} />
        <Image
        source={post.img}
        style={styles.img}
        resizeMode='cover'
        />
        <PostFooter post={post} />
    </View>
  )
}

export default Post



const PostHeader = ({pp, name, loc}:{name:string; pp:string; loc?:string}) => {
    return (
        <View className='flex-row w-full items-center justify-between mb-5'>
            <View className='flex-row items-center gap-3'>
                <Image
                    source={pp}
                    resizeMode='contain'
                    style={styles.ppimg}
                />
                <View>

                    <Text className='text-white'>{name}</Text>
                    {loc && (<Text className='text-white  mt-1'>{loc}</Text>)}
                </View>
            </View>
            <Text className='text-white text-2xl'>...</Text>
        </View>
    )
}
const PostFooter = ({post}:Props) => {
    return (
        <View className=''>


            <View className='flex-row items-center w-full justify-between mt-3'>
                <View className='flex-row items-center gap-3'>
                    <TouchableOpacity>
                        <Iconx
                            src={require('../../assets/images/icons8-favorite-30.png')} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Iconx
                            src={require('../../assets/images/icons8-comments-24.png')} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Iconx
                            src={require('../../assets/images/icons8-sent-24.png')} 
                        />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity>
                    <Iconx
                        src={require('../../assets/images/icons8-bookmark-24.png')} 
                    />
                </TouchableOpacity>
            </View>

            <Text className='text-slate-500 font-medium mt-1'>
                {post.likes === 1 ? `${post.likes} like` : `${post.likes} likes`}
            </Text>
            <View className='flex-row items-center gap-3 mb-2'>
                <Text className='text-white font-semibold'>{post.name}</Text>
                <Text className='text-slate-200'>{post.caption}</Text>
            </View>
            <View>
                    {/* return ( */}
                        {!!post.comments?.length && <Text className='text-slate-500'>
                             {post.comments?.length > 1 ? `View all ${post.comments.length} comments` : `View ${post.comments.length} comment`}
                        </Text>}
                        {post.comments?.length != 0 && <View className='flex-row gap-2'>
                            <Text className='text-white'>{post.comments[0].user}</Text>
                            <Text className='text-white'>{post.comments[0].comment}</Text>
                        </View>}
                    {/* ) */}
                {/* })} */}
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    ppimg: {
      width:50,
      height:50,
      borderRadius:50,
      borderWidth:3,
      borderColor: '#f2503a'
    },
    img : {
        width:'100%',
        height:500,
    },
    txt: {
      color: 'white'
    }
  })