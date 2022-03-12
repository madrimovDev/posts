import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MainPost = ({ post }) => {
  return (
    <div className='card lg:card-side bg-base-200 shadow-xl'>
      <figure><img src="https://api.lorem.space/image/furniture?w=400&h=400" alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <Link to="#" className="btn btn-primary">Read More...</Link>
        </div>
      </div>
    </div>
  )
}
