import React from 'react'
import {useState, useEffect} from 'react'
import './SidebarInnerContent.css'
import SidebarInnerContent1 from './SidebarInnerContent1'
import SidebarInnerContent2 from './SidebarInnerContent2'

const SidebarInnerContent = () => {

  const [tableWeekDays, setTableWeekDays] = useState([])
  
  const [startEndDates, setStartEndDates] = useState({Firstday: '', Lastday: ''})

  // const weekEndDates = {Firstday: '',
  //                      Lastday: ''}

          // function name(nextWeek){
          //       const newDate = new Date(nextWeek)
          
          //        console.log( newDate)

          // }

          // name() 

  function DayOfTheMonthFn(val){
  
    const today = new Date(val); 

    const DayOfMonth = today.getDate();
    const DayofWeek = today.getDay();
    let updatedWeekdays = []
  
    for(let i=0; i<7; i++){
      const FirstDayOfWeekInDate = DayOfMonth - DayofWeek;
      const modifiedDate = new Date(today)
      const CurrDayOfWeekInDate = FirstDayOfWeekInDate + i
      modifiedDate.setDate(CurrDayOfWeekInDate)
      // console.log(modifiedDate)
      const DayOfTheMonth = modifiedDate.getDate()
     
      const options = { weekday: 'long' };
      const CurrDayOfCurrentWeek = modifiedDate.toLocaleString('en-US', options)

      const optionsmonthforDiv = {month: 'numeric'};
      const monthOfTheYear = modifiedDate.toLocaleString('en-US', optionsmonthforDiv);

      const optionsyearforDiv = {year: 'numeric'};
      const year = modifiedDate.toLocaleString('en-US', optionsyearforDiv)
  
      let newObj = { weekday: '',
      DayOfTheMonth: '',
      Month: '',
      Year: ''}


      if(i === 0){
        const optionMonth = {month : 'long'}
        const MonthOfFirstDay = modifiedDate.toLocaleString('en-US', optionMonth)

        const optionDay = {day : 'numeric'} 
        const FirstDayOfWeek = modifiedDate.toLocaleString('en-US', optionDay);
        
        const startDate = MonthOfFirstDay + ' ' + FirstDayOfWeek
        
        setStartEndDates((oldStartEndDates)=> ({...oldStartEndDates, Firstday: startDate}))
      }
    
      if(i === 6){
        const optionMonth = {month : 'long'}
        const MonthOfLastDay = modifiedDate.toLocaleString('en-US', optionMonth)

        const optionDay = {day : 'numeric'} 
        const LastDayOfWeek = modifiedDate.toLocaleString('en-US', optionDay);

        const optionYear = {year : 'numeric'} 
        const year = modifiedDate.toLocaleString('en-US', optionYear);
        
        const lastDate = MonthOfLastDay + ' ' + LastDayOfWeek + ', ' + year
  
        setStartEndDates((oldStartEndDates)=> ({...oldStartEndDates, Lastday: lastDate }))
      }
      
                     
      newObj.weekday = CurrDayOfCurrentWeek;
      newObj.DayOfTheMonth = DayOfTheMonth;
      newObj.Month = monthOfTheYear;
      newObj.Year = year;
      
      updatedWeekdays.push(newObj)
      
    }
   
    setTableWeekDays(updatedWeekdays)

    
    
  }




  // Log weekEndDates whenever it changes
  useEffect(() => {
    DayOfTheMonthFn(new Date())
    
  }, []);


 

  return (
    <>
    <div className='sidebarContent' >
      <div className='SidebarInnerContent1'><SidebarInnerContent1 startEndDates={startEndDates} 
      DayOfTheMonthFn={DayOfTheMonthFn}/></div>
      <div className='SidebarInnerContent2'><SidebarInnerContent2 tableWeekDays={tableWeekDays} 
      DayOfTheMonthFn={DayOfTheMonthFn} /></div>
    
    
    </div>
    </>
  )
}

export default SidebarInnerContent

