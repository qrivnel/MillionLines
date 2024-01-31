import React, { useEffect, useState } from 'react'

//Packages
import { VList } from "virtua";

//Components
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    // <div style={{ width: '100vw', height: '100vh', backgroundColor: 'lightgray' }}>

    // </div>
    <VList style={{ height: '100vh' }}>
      {/* {
          posts == undefined
                  ? null
                  : posts.map((post, i) => {
                    return <Post key={i} post={post} />
                  })
        } */}
      {Array.from({ length: 100000 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 16,
            borderBottom: "solid 1px gray",
            background: "white",
          }}
        >
          <label style={{display: 'flex', justifyContent: 'center'}}>{i}</label>
        </div>
      ))}
    </VList>
    // <div>
    //   {Array.from({ length: 10000 }).map((_, i) => (
    //     <div
    //       key={i}
    //       style={{
    //         height: 16,
    //         borderBottom: "solid 1px gray",
    //         background: "white",
    //       }}
    //     >
    //       <label style={{ display: 'flex', justifyContent: 'center' }}>{i}</label>
    //     </div>
    //   ))}
    // </div>
  )
}

export default App
