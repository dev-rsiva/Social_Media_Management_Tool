import React from 'react'
import {useState} from 'react'
import {LuArrowRightSquare} from 'react-icons/lu'
import {LuArrowLeftSquare} from 'react-icons/lu'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const SidebarInnerContent1 = (props) => {

    const {startEndDates, DayOfTheMonthFn} = props
    
    const [currDates, setCurrDates] = useState(new Date())

    function Moveright() {
      
      const nextWeek = new Date(currDates);
      
      nextWeek.setDate(currDates.getDate() + 7); // Set the date to the next week
    
      DayOfTheMonthFn(nextWeek); // Pass the nextWeek date object to DayOfTheMonthFn

      setCurrDates(nextWeek)
    }
    
    function Moveleft() {
   
      const lastWeek = new Date(currDates);
  
      lastWeek.setDate(currDates.getDate() - 7); // Set the date to the next week
    
      DayOfTheMonthFn(lastWeek); // Pass the nextWeek date object to DayOfTheMonthFn
      setCurrDates(lastWeek)
    }
    
    
    
    

  return (
    <>
    <div className='sidebarcontent'>

    
      <div className='selection'>
          <ul className='selectDate' style={{ margin:'0px 10px'}}> 
            <li><LuArrowLeftSquare onClick={()=> Moveleft() } style={{fontSize:'x-large'}}/></li>
            <li><button onClick={()=> {DayOfTheMonthFn(new Date())
                                        setCurrDates(new Date())}}>Today</button>  
            </li>
            <li><LuArrowRightSquare onClick={()=> Moveright() } style={{fontSize:'x-large'}}/></li>
          </ul>

          <p>{startEndDates.Firstday} - {startEndDates.Lastday}</p>
      </div>

      <div className='buttons'>
        <ul className='options'>
          <li>GMT+5.30 <AiOutlineInfoCircle /></li>
          <li>
            <select className='postsList' id='posts' style={{padding:'5px', margin:'0px 10px'}}>
              <option value='AllPosts'>All Posts</option>
              <option value='Drafts'>Drafts</option>
              <option value='Scheduled'>Scheduled</option>
              <option value='SentPosts'>Sent Posts</option>
              <option value='Pending Approval'>Pending Approval</option>
            </select>
          </li>
          <li>
            <select className='channelsList' id='channels' style={{padding:'5px'}}>
              <option value='AllChannels'>All Channels</option>
            </select>
          </li>
        </ul>

        <ul className='weekBtns' style={{padding:'2px', margin:'0px 10px'}}>
          <button className='btn'>Week</button>
          <button className='btn'>Month</button>
        </ul>

        <button className='postbtn'>Create Post</button>
        
      </div>

    </div>

    </>
  )
}

export default SidebarInnerContent1