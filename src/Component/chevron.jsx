
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Chevron({icon,handleclick, disable }){
    
        return(
            <FontAwesomeIcon icon={icon} className={disable? "disable": "chevron"} onClick={handleclick} />
        )
}