
import './App.css'

import React, { Suspense } from 'react';

// @ts-ignore
const RemoteVisualComponent = React.lazy(() => import('bunServer/jsx')); 

function App() {

  return (
    <>
      <h1>The component below is served from a server running on Bun!</h1>
      <Suspense>
        <RemoteVisualComponent onClick={()=>{window.alert("This is an onClick handler for the feedback!")}} chartData={[1,2,3,4,5,6,7,8,9,10]} />
      </Suspense>
    </>
  )
}

export default App
