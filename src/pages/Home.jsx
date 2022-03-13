import React from 'react'
import { MainPost } from '../components/MainPost'
import { Posts } from './Posts'

export const Home = ( { posts } ) => {

  return (
    <div className='container mx-auto mt-10 px-10'>
        <MainPost post={posts[1]}/>
        <MainPost post={posts[2]}/>
        <MainPost post={posts[3]}/>
    </div>
  )
}
