import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Button from "./button"

export default function Header({origin}){
    const navigate = useNavigate()

    const handleEmployeeList = ()=>{
        navigate("/employee-list")
    }
    const handleHomePage=()=>{
        navigate("/")
    }

    return(
        <div className="headerContent">
           <h1>HRnet</h1>
           {origin=="Home"? 
           <Button text="View current Employees" handleClick={handleEmployeeList} />:
            <Button text="New Employee" handleClick={handleHomePage} />}
        </div>
    )
}