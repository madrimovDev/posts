import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MainPost = ({ post }) => {
  return (
    <div className='card lg:card-side bg-base-200 shadow-xl my-10'>
      <figure><img src="https://api.lorem.space/image/furniture?w=700&h=700" alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{post ? post.title : 'Loading...'}</h2>
        <p>{post ? post.body : 'Loading...'}</p>
        <div className="card-actions justify-end">
          <Link to="#" className="btn btn-primary">Read More...</Link>
        </div>
      </div>
    </div>
  )
}
