/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ posts }) => (
  <div>
    <h1>My blog</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
