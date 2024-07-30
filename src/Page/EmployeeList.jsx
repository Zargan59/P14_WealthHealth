import Header from "../Component/Header"
import ShowEntries from "../Component/ShowEntries"
import Search from "../Component/Search"
import EmployeeTab from "../Component/EmployeeTab"
import { useState } from "react"

export default function EmployeeList(){
    const [employeeList, setEmployeeList]=useState([])

    setEmployeeList([
       { firstname: "Tony",
        Lastname: "Stark",
        StartDate:"25/05/2005",
        Department: "Sales",
        BirthDate: "07/02/1988",
        Street: "Rue fin de la guerre"
       }

    ])

    return(
        <div>
            <Header/>
            <main>
                <h2>Current Employees</h2>
                <div className="headerEmployeeList">
                    <ShowEntries/>
                    <Search />
                </div>
                <div className="tabContent">
                    <div className="mainLine tab">
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Start Date</p>
                        <p>Date of Birth</p>
                        <p>Department</p>
                        <p>Street</p>
                        <p>City</p>
                        <p>State</p>
                        <p>ZipCode</p>
                    </div>
                    <div className="employeeInfo">
                        <EmployeeTab />
                    </div>
                </div>
            <div>
                <p>Showing 1 to 3 entries </p>
            </div>
            </main>
        </div>
    )
}