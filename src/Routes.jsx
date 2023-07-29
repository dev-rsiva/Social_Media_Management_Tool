import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Publishing from './pages/Publishing.jsx'
import Analytics from './pages/Analytics.jsx'
import Engagement from './pages/Engagement.jsx'
import StartPageInnerContent from './components/StartPageInnerContent.jsx'
import TrialPage from './pages/TrialPage.jsx'

const MainRoutes = () => {
  return (
          <Routes>
                <Route path='/' element={<Publishing/>} />
                <Route path='/publishing' element={<Publishing />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/engagement' element={<Engagement />} />
                <Route path='/startpage' element={<StartPageInnerContent />} />
                <Route path='/trialpage' element={<TrialPage />} />



          </Routes>
  )
}

export default MainRoutes









// import Queues from './pages/Queues.jsx'
// import Create from './pages/Create.jsx'
// import Calendar from './pages/Calendar.jsx'
// import Campaigns from './pages/Campaigns.jsx'
/* <Route path="/" element={<Queues/>} />
<Route path="/create" element={<Create/>} />
<Route path="/calendar" element={<Calendar/>} />
<Route path="/campaigns" element={<Campaigns/>} /> */