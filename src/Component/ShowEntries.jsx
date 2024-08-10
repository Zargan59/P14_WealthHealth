import { useState } from "react"


export default function ShowEntries(){
    const [entries, setEntries] = useState("10")

    const handleChangeEntries = (e) =>{
        //Affiche le nombre d'entrée maximum à afficher
        setEntries(e.target.selectedOptions[0].value) 
    }
    return(
        <div className="entriesContent">
            <p>Show</p>
            <select onChange={handleChangeEntries}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>

            </select>
            <p>entries</p>
        </div>
    
    )
}