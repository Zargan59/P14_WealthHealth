import { useState } from "react";
import DatePicker from "react-datepicker"


export default function InputFormEmployee({label,content,type, data, date, value }) {
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
          <DatePicker id={label}  onChange={(selectDate) => date(selectDate.toLocaleDateString("fr"))} value={value} showYearDropdown scrollableYearDropdown  />
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
