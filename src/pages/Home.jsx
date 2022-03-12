import React from 'react'
import { MainPost } from '../components/MainPost'
import { Posts } from './Posts'

export const Home = ( { posts } ) => {
    const post1 = posts[0]
    // const post2 = posts[1]
    // const post3 = posts[2]
  return (
    <div className='container mx-auto mt-10'>
        { posts ? <MainPost post={post1}/> : ''}
        {/* <MainPost post={post2}/> */}
        {/* <MainPost post={post3}/> */}
    </div>
  )
}
