import Header from "../Component/Header"
import ShowEntries from "../Component/ShowEntries"
import Search from "../Component/Search"
import EmployeeTab from "../Component/EmployeeTab"
import { useEffect, useState } from "react"
import MainLineTab from "../Component/mainLineTab"
import Chevron from "../Component/chevron"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import NumberPage from "../Component/numberPage"

export default function EmployeeList(){
    const Employee = useSelector((state)=> state.employee.employees)
    // const  [sortedEmployee, setSortedEmployee] = useState(...Employee)

   

    const [entries, setEntries] = useState(10)
    const [error, setError] = useState(true)
    const [totalEntries, setTotalEntries] = useState(0)
    const [isSearching, setIsSearching] = useState("")

    const [sort, setSort] = useState(true)
    const [currentIDSort, setCurrentIDSort] = useState("firstName")
    
    const [employeeslist, setEmployeeList]= useState()
    const [displayEmployees, setDisplayEmployees]=useState([])

    const [currentPage, setCurrentPage] = useState("1")
    const [page, setPage] = useState([])

    useEffect(()=>{
        definePageNumber()
        if(Employee.length> 0 ){
            setError(false)
            setTotalEntries(Employee.length)
        }
        else{
            setError(true)
            setPage([])
        }
    }, [])

    useEffect(()=>{
        if(employeeslist){
            displayEntries()
        }

    },[employeeslist])

    //le système de tri fonctionne mais je dois utiliser un nouveau tableau, 
    // useEffect(()=>{
    //     if(sort){
    //         console.log("Alpha");
    //         setSortedEmployee([...Employee].toSorted((a,b)=>{
    //             if (typeof a[currentIDSort] === "string") {
    //                 return a[currentIDSort].localeCompare(b[currentIDSort])
    //               }
    //               else{
    //                 return a[currentIDSort]-(b[currentIDSort])
    //               }
    //             }))
    //     }
    //     else{
    //         console.log("Anti-Alpha");
    //     }
    // },[sort])
    
    useEffect(()=>{
        //Définis la première entité de chaque page
        let defineFirstEmployeeOfPage = (currentPage - 1 ) * entries
        setEmployeeList(Employee.slice(defineFirstEmployeeOfPage, defineFirstEmployeeOfPage+entries))
    },[isSearching,entries, currentPage])

    const handleNextPage = ()=>{
        setCurrentPage(Number(currentPage)+1)
    }
    const handlePreviousPage = ()=>{
        setCurrentPage(Number(currentPage)-1)

    }

    const handleClickSort = (e)=>{
        const sortColumn = e.target.id
        if(sortColumn){
            setCurrentIDSort(sortColumn)
            if(sortColumn == currentIDSort){
                setSort(!sort)
            }
            else{
                setSort(true)
            }
        }
    }

    
     const displayEntries = () =>{
        let tabOfEmployee = []
        //A remplacer par le tableau trier

        if(Employee.length>entries){
            for(let i= 0; i< entries; i++){
                tabOfEmployee.push(Employee[i])
            }
            setDisplayEmployees(employeeslist)
        }
        else{
            setDisplayEmployees(employeeslist)
        }

        
    }

    const handleSearchChange = (e)=> {
        const search = e.target.value.toLowerCase()
        setIsSearching(search)
        let tab =[]
        let tabTest= new Set()


        //A remplacer par le tableau trier

        Employee.filter((employee)=>{
            const test = Object.values(employee)
            test.forEach((element)=>{
                if(element.toLowerCase().includes(search)){
                    tab.push(element)
                }
            })
            tab.forEach(element => {
                test.find(e =>{
                    if(e==element){
                        tabTest.add(employee)
                    }
                })
            });
        })
        //Push les personnes présente dans mon 
        setEmployeeList(Array.from(tabTest))
        // displayEntries(Array.from(tabTest))
    }


    const handleChangePage=(e)=>{
        setCurrentPage(e.target.value)
    }


    const definePageNumber = () =>{
        let numberPages = []
        const pages = Employee.length % entries 
        for(let i=0; i<pages+1; i++){
            numberPages.push(i)
        }
        setPage(numberPages)
        if(Employee.length % entries!== 0){
        }
        //quand j'ai 44 entrées, j'obtiens un modulo de 4, j'ai donc 4 page en réserve
    }
     
    return(
        <div>
            <Header/>
            <main>
                <h2>Current Employees</h2>
                <div className="headerEmployeeList">
                    <ShowEntries entries={entries} setEntries={setEntries}/>
                    <Search handleChange={handleSearchChange} />
                </div>
                <div className="tabContent">
                    <div className="mainLine tab">
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="First Name" id='firstName' handleSort= {handleClickSort} />
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="Last Name" id="lastName" handleSort= {handleClickSort}  />
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="Start Date" id="startDate" handleSort= {handleClickSort} />
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="Date of Birth" id="birthDate" handleSort= {handleClickSort}/>
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="Department" id="department" handleSort= {handleClickSort}/>
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="Street" id="street"  handleSort= {handleClickSort}/>
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="City" id="city" handleSort= {handleClickSort}/>
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="State" id="state" handleSort= {handleClickSort}/>
                        <MainLineTab currentIDSort={currentIDSort} sort={sort} content="ZipCode" id="zipCode" handleSort= {handleClickSort} />
                    </div>
                    <div className="employeeInfo">
                        {error? 
                        <div className="employeeLine emptyData">
                            <h3> No data available in table</h3>

                        </div>
                        : displayEmployees.map((employee, index)=>(
                            <EmployeeTab key={index} employees={employee} />
                        ) )
                        } 
                        
                    </div>
                </div>
                <footer>
                    <div className="totalEntries">
                        <p>Showing 1 to {displayEmployees.length}  of {totalEntries} entries </p>
                    </div>
                    <div className="changePage">
                        
                        <Chevron icon={faChevronLeft}  handleclick={handlePreviousPage} disable={currentPage == 1} />
                    
                        {page.map((page, index) =>(
                            <NumberPage key={page} numberpage={page} changePage={handleChangePage} currentPage={currentPage} />
                        ))}
                        <Chevron icon={faChevronRight} handleclick={handleNextPage}  disable={currentPage == page.length} /> 
                    </div>
                </footer>
            </main>
        </div>
    )
}