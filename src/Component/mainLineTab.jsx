import { useState } from "react";

export default function MainLineTab({content}){
    const [sort, setSort]= useState(true)
    const handleSort = (e)=>{
        setSort(!sort)
        const test = e.target.innerHTML
        //Rajouter une condition si =undefined
        console.log(e.target.innerHTML)
        if(sort){
            console.log("Tri par ordre décroissant");
        }
            
        else{
        console.log("Tri par ordre croissant");
    }
}
return(
    <div onClick={handleSort} className="tabMain" >
        <p>{content}</p>
    </div>
)
}