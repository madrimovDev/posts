import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {
  return (
    <div className='card bg-base-200'>
        <figure className='h-3/6'>
            <img className='h-full w-full bg-cover' src="https://api.lorem.space/image/furniture?w=400&h=225" alt="PHOTO" />
        </figure>
        <div className="card-body p-4">
            <h1 className='card-title text-sm'>{post.title.substring(0, 15).toUpperCase()}...</h1>
            <p className="card-desc text-xs">{post.body.substring(0, 40)}</p>
            <div className="card-actions">
                <Link className='btn btn-secondary btn-sm text-xs' to={'#'}>Read More ...</Link>
            </div>
        </div>
    </div>
  )
}
