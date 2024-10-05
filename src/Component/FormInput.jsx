import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons"

import "react-datepicker/dist/react-datepicker.css";

export default function InputFormEmployee({label,content,type, data }) {
  const [startDate, setStartDate] = useState(null)
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()


  const years =[];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  for(let i=1950; i <= currentYear; i++ ){
    years.push(i)
  }
  

  
  const CustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => 
    {
      return( <section className="customHeaderDatePicker" >
        <button onClick={()=>{
          changeYear((new Date()).getFullYear())
          changeMonth((new Date()).getMonth() )
        }} className="navigateDateButton currentHomeButton "> <FontAwesomeIcon icon={faHome} /> </button>
        <div className="calendarContent">
          <button className="navigateDateButton" onClick={decreaseMonth}> <FontAwesomeIcon icon={faChevronLeft} /> </button>  
          {/* <h2>{date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</h2> */}

          <select
            value={months[date.getMonth()]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)}>
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          


          <button className="navigateDateButton" onClick={increaseMonth}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </section >)
   
  }

    if(type == "select"){
        return (
            <div className="formContent">
              <label htmlFor={label}>{content}</label>
              <select name={label} id={label} >
                {data.map(option=>(
                    <option key={option.abbreviation} value={option.abbreviation}> {option.name}  </option>
                ))}
              </select>
            </div>
          );
    }
    else if(type === "date") {
      return(
        <div className="formContent">
          <label htmlFor={label}>{content}</label>
          <DatePicker fixedHeight id={label}  onChange={(date)=> setStartDate(date)} selected={startDate} renderCustomHeader={(props) => <CustomHeader {...props} />}/>
        </div>
      )
    }
    else{
        return (
          <div className="formContent">
            <label htmlFor={label}>{content}</label>
            <input type={type} id={label} />
          </div>
        );
    }

}
