
export default function MainLineTab({content, id ,handleSort, currentIDSort, sort }){

if(id == currentIDSort){
    return(
        <div onClick={handleSort} className="tabMain" >
            <div className={sort? "alphabetique" : "anti-alphabetique" } >
                <p id={id}>{content}  </p>
            </div>
        </div>
    )
}


else{
    return(
        <div onClick={handleSort} className="tabMain" >
            <p id={id}>{content}  </p>
        </div>
    )
}
}