import React from 'react'
import { Post } from '../components/Post'

export const Posts = ({posts}) => {
  return (
    <div className='container px-5 my-10 grid grid-cols-4 gap-7 place-content-center'>
      {posts ? posts.map((item, id) => <Post key={id} post={item}/>) : ''}
    </div>
  )
}
