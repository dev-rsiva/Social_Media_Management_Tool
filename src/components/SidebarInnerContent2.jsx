import React, {useEffect, useState} from 'react'
import './SidebarInnerContent2.css'
import {BsPlusSquare} from 'react-icons/bs'

const SidebarInnerContent2 = (props) => {

  const {tableWeekDays, DayOfTheMonthFn} = props

  const [currTime, setCurrTime] = useState(new Date())


  console.log(currTime)



  function ShowPost(){

    return(
      <>
        <div className='addpostoutertdiv'>
          <div className='addpostinnerdiv'>
            <BsPlusSquare />
          </div>
        </div>
      
      
      
      </>
    )


  }













function CompareTime(i,j){

  const currentTime = new Date(currTime) 
  const month = (tableWeekDays?.[i]?.Month -1)
  const day = tableWeekDays?.[i]?.DayOfTheMonth
  const year = tableWeekDays?.[i]?.Year
  const hour = j

  const slotTime = new Date(year,month,day,hour,0,0)

  // console.log(currentTime)
  // console.log(month)
  // console.log(slotTime)

  return currentTime > slotTime

}





useEffect(()=>{

  const interval = setInterval(()=>{
    // const timeNow = new Date()
    setCurrTime(new Date())
  }, 60000);

  

  return ()=> clearInterval(interval);

}, [])





function GenerateTable(){

  const wholeTable = []

  for(let j=0; j<24; j++){
    const row = []
    
    wholeTable.push(<tr className={`row rowno${j+1}`}>{row}</tr>)
  

    for (let i=0; i<7; i++){

      const idName = tableWeekDays?.[i]?.Year && tableWeekDays?.[i]?.Month && tableWeekDays?.[i]?.DayOfTheMonth   
  ? `${tableWeekDays[i].Year} ${tableWeekDays[i].Month} ${tableWeekDays[i].DayOfTheMonth} ${j+1} hour`
: '';

      

      const styleName = CompareTime(i,j) ? 'paststyle' : 'futurestyle'
     
      // i * 24 + j + 1

      row.push(<td key={`td-${i}-${j}`} ><div id={idName} className={styleName}>{styleName === 'futurestyle' ? ShowPost() : null}</div></td>)
    }
  
  }

  return wholeTable
}



useEffect(()=>{
  DayOfTheMonthFn()
 
}, [])





  return (
    <div className='table-container'>
      <table className='tableForSchedule'>
        <thead>
          {tableWeekDays.map((eachday)=>{
              return <th> {eachday.weekday} {eachday.DayOfTheMonth} </th>
          })
          }
        </thead>  
        <tbody>{GenerateTable()}</tbody>
              
      </table>
    </div>
  )
}

export default SidebarInnerContent2

