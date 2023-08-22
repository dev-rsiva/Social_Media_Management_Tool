import React from 'react'
import SidebarPublishing from '../components/sidebarPublishing'
import SidebarInnerContent from '../components/SidebarInnerContent'
import './Publishing.css'

const Publishing = () => {
  return (<>
    <div className='maincontent'>

        <SidebarPublishing />
        
        <SidebarInnerContent />

    </div>

  
  </>
  )
}

export default Publishing

// style={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'white',
//   height: '100vh'}}