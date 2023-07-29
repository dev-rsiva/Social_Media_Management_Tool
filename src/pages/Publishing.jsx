import React from 'react'
import SidebarPublishing from '../components/sidebarPublishing'

const Publishing = () => {
  return (<>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', backgroundColor:'yellowgreen',
  height: '100vh'}}>

        <SidebarPublishing />
        
        <h1>Publishing</h1>

    </div>

  
  </>
  )
}

export default Publishing