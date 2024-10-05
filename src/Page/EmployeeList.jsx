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
    const [employeeFiltered, setEmployeeFiltered] = useState()

    const [disableNextPage, setDisableNextPage]=useState(true)
    const [disablePreviousPage, setDisablePreviousPage]=useState(true)

    const [entries, setEntries] = useState(10)
    const [error, setError] = useState(true)
    const [totalEntries, setTotalEntries] = useState(0)
    const [isSearching, setIsSearching] = useState("")

    const [sort, setSort] = useState(true)
    const [currentIDSort, setCurrentIDSort] = useState("firstName")
    
    const [displayEmployees, setDisplayEmployees]=useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [page, setPage] = useState([])


    useEffect(()=>{
        setTotalEntries(Employee.length)
        if(Employee.length){
            setError(false)
            sortEmployee(Employee)
        }
        else{
            setError(true)
        }
    },[sort,entries,currentPage,currentIDSort ])

    //Quand j'affiche quelque chose de différent, je fais le trie
    useEffect(()=>{
        if(currentPage > 1){
            setDisablePreviousPage(false)
        }
        else{
            setDisablePreviousPage(true)
            
        }
    },[currentPage, entries])


    //Quand je fais une recherche
    useEffect(()=>{
        if(employeeFiltered){
            sortEmployee(employeeFiltered)
        }
    },[employeeFiltered,sort,entries,currentPage])

    //Tri du tableau
    const handleClickSort = (e)=>{
        const sortColumn = e.target.id
        if(sortColumn){
            setCurrentIDSort(sortColumn)
            if(sortColumn === currentIDSort){
                setSort(!sort)
            }
            else{
                setSort(true)
            }
        }
    }
    
    //Recherche
    const handleSearchChange = (e)=> {
        const search = e.target.value.toLowerCase()
        setIsSearching(search)
        let tab =[]
        let tabTest= new Set()

        Employee.filter((employee)=>{
            const test = Object.values(employee)
            test.forEach((element)=>{
                if(element.toLowerCase().includes(search)){
                    tab.push(element)
                }
            })
            tab.forEach(element => {
                test.find(e =>{
                    if(e===element){
                        tabTest.add(employee)
                    }
                })
            });
        })
        setEmployeeFiltered(Array.from(tabTest))
    }

    //Afficher les employés
    const sortEmployee = (tab) =>{
        definePageNumber(tab)
        //Fonction qui reconnait le premier employée de chaque page une fois le tableau trier. 
        //Me renvoie à la fin ce que je dois afficher
        let defineFirstEmployeeOfPage = (currentPage - 1 ) * entries
        if(sort){
            const employeeSorted = [...tab].toSorted((a,b)=>{
                if (typeof a[currentIDSort] === "string") {
                    return a[currentIDSort].localeCompare(b[currentIDSort])
                  }
                  else{
                    return a[currentIDSort]-(b[currentIDSort])
                  }
                })
                setDisplayEmployees(employeeSorted.slice(defineFirstEmployeeOfPage, defineFirstEmployeeOfPage+entries))
        }
        else{
            const employeeSorted = [...tab].sort((a, b) => {
                if (typeof a[currentIDSort] === "string") {
                  return b[currentIDSort].localeCompare(a[currentIDSort]);
                } 
                else {
                  return b[currentIDSort] - a[currentIDSort];
                }
            })
            setDisplayEmployees(employeeSorted.slice(defineFirstEmployeeOfPage, defineFirstEmployeeOfPage+entries))

        }
    }

    const handleChangePage=(e)=>{
        setCurrentPage(Number(e.target.value))
    }
    const handleNextPage = ()=>{
        setCurrentPage(Number(currentPage)+1)
    }
    const handlePreviousPage = ()=>{
        setCurrentPage(Number(currentPage)-1)

    }

    //Affiche le nombre total de pages
    const definePageNumber = (tab) =>{
        let numberPages = []
        const pages = Math.ceil(tab.length/entries) 
        //Si j'ai + de 2pages
        if(pages > 2 ){
            if(Number(currentPage)+2 > pages){
                for(let i=Number(currentPage)-2; i< pages; i++){
                    numberPages.push(i)
                }
            }
            else{
                for(let i=Number(currentPage)-1; i<Number(currentPage)+2; i++){
                    numberPages.push(i)
                }
            }
            setPage(numberPages)
            setDisableNextPage(false)
        }
        else if(pages === 1){
            setPage([0])
            setDisablePreviousPage(false)
        }
        else{
            setPage([0,1])
            setDisablePreviousPage(false)

        }
        if(currentPage===pages){
            setDisableNextPage(true)
        }
        else{
            setDisableNextPage(false)
        }
    }
     

    return(
        <div>
            <Header/>
            <main>
                <h2>Current Employees</h2>
                <div className="headerEmployeeList">
                    <ShowEntries setEntries={setEntries}/>
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

                    {
                            disablePreviousPage? 
                            <Chevron icon={faChevronLeft}  handleclick={handlePreviousPage} disable />
                            : 
                            <Chevron icon={faChevronLeft}  handleclick={handlePreviousPage}  />
                        }
                        
                    
                        {page.map((page, index) =>(
                            <NumberPage key={page} numberpage={page} changePage={handleChangePage} currentPage={currentPage} />
                        ))}
                        {
                            disableNextPage? 
                            <Chevron icon={faChevronRight} handleclick={handleNextPage}  disable /> 
                            : 
                            <Chevron icon={faChevronRight} handleclick={handleNextPage}   /> 
                        }
                        
                    </div>
                </footer>
            </main>
        </div>
    )
}