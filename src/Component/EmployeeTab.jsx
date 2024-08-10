import { useState } from "react";

export default function EmployeeTab({employees}){
    return(
        <div>
            <div className="employeeLine tab">
                <p>{employees.firstName}</p>
                <p>{employees.lastName}</p>
                <p>{employees.birthDate}</p>
                <p>{employees.startDate}</p>
                <p>{employees.department}</p>
                <p>{employees.street}</p>
                <p>{employees.city}</p>
                <p>{employees.state}</p>
                <p>{employees.zipCode}</p>
            </div>
            
        </div>
            
    )
} 