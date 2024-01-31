import React, { useEffect, useState } from 'react'

export default function Post({ post }) {
    return (
        <div style={{
            height: 100,
            borderBottom: "solid 1px gray",
            background: "white",
          }}>
            <label style={{fontSize: 20, fontWeight: 'bold'}}> {post.title} </label>
            <br />
            <label> {post.body} </label>
        </div>
    )
}
