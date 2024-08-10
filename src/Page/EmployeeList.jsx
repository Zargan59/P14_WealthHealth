import Header from "../Component/Header"
import ShowEntries from "../Component/ShowEntries"
import Search from "../Component/Search"
import EmployeeTab from "../Component/EmployeeTab"
import { useEffect, useState } from "react"
import MainLineTab from "../Component/mainLineTab"


export default function EmployeeList(){

  //Va me falloir un useState pour afficher les employées

    // const employees = JSON.parse(localStorage.getItem("employees"))
    const [error, setError] = useState(true)
    const [totalEntries, setTotalEntries] = useState(0)
    const [employeeslist, setEmployeeList]= useState(JSON.parse(localStorage.getItem("employees")))

console.log("",employeeslist);
    useEffect(()=>{
        // setEmployeeList(employees)

        if(employeeslist){
            setError(false)
            setTotalEntries(employeeslist.length)
        }
        else{
            setError(true)
            console.log("Y'a pas d'employés");
        }


    })

   


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
                        <MainLineTab content="First Name"  />
                        <MainLineTab content="Last Name"  />
                        <MainLineTab content="Start Date" />
                        <MainLineTab content="Date of Birth"/>
                        <MainLineTab content="Department"/>
                        <MainLineTab content="Street" />
                        <MainLineTab content="City" />
                        <MainLineTab content="State" />
                        <MainLineTab content="ZipCode" />
                    </div>
                    <div className="employeeInfo">
                        {error? 
                        <div className="employeeLine emptyData">
                            <h3> No data available in table</h3>

                        </div>
                        : employeeslist.map((employee, index)=>(
                            <EmployeeTab key={index} employees={employee} />
                        ) )} 
                        
                    </div>
                </div>
            <footer className="totalEntries">
                <p>Showing 1 to  of {totalEntries} entries </p>
            </footer>
            </main>
        </div>
    )
}