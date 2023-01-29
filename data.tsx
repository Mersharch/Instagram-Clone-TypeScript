import { PostType, StoriesType } from "./types"

export const stories: StoriesType[] =[
    {
      name: 'bijouxbaidoe',
      id:1,
      img:require('./assets/images/prof1.jpg')
    },
    {
      name: 'kenneth.may',
      id:2,
      img:require('./assets/images/prof2.jpg')
    },
    {
      name: '1kerwinodoom',
      id:3,
      img:require('./assets/images/prof3.jpg')
    },
    {
      name: 'mr.edisi',
      id:4,
      img:require('./assets/images/prof4.jpg')
    },
    {
      name: 'berimaseanbills',
      id:5,
      img:require('./assets/images/prof5.jpg')
    },
    {
      name: 'iphonedj',
      id:6,
      img:require('./assets/images/prof6.jpg')
    },
    {
      name: 'blac.volta',
      id:7,
      img:require('./assets/images/prof7.jpg')
    },
    {
      name: 'torsu.dee',
      id:8,
      img:require('./assets/images/prof8.jpg')
    },
    {
      name: 'ernestboamahgaisie',
      id:9,
      img:require('./assets/images/prof9.jpg')
    },
  ]



  export const posts: PostType[] = [
    {
        id: 1,
        pp:require('./assets/images/prof1.jpg'),
        img:require('./assets/images/bb.jpg'),
        name:'bijouxbaidoe',
        likes:784,
        caption:'Melannin Poppin whew',
        comments: [
            {
                comment:'Nice',
                user:'KobbyDems'
            },
            // {
            //     comment:'Very beautiful display of art',
            //     user:'davido'
            // }
        ],
        loc:'Accra, Ghana'
    },
    {
        id: 2,
        pp:require('./assets/images/prof2.jpg'),
        name:'1kerwinodoom',
        img: require('./assets/images/ko.jpg'),
        likes:784,
        caption:'New work out soon 📽',
        comments: [
            // {
            //     comment:'Nice',
            //     user:'KobbyDems'
            // },
            // {
            //     comment:'Very beautiful display of art',
            //     user:'davido'
            // }
        ]
    },
    {
        id: 3,
        pp:require('./assets/images/prof3.jpg'),
        img:require('./assets/images/kn.jpg'),
        name:'kenneth.may',
        likes:784,
        caption:'Nature is my inspiration',
        comments: [
            {
                comment:'Nice',
                user:'KobbyDems'
            },
            {
                comment:'Very beautiful display of art',
                user:'davido'
            }
        ],
        loc:'Michigan, USA'
    },
]

