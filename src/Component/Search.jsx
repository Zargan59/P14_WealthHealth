import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Search({handleChange}){
    return(
        <div className="searchContent">
            <p>Search <FontAwesomeIcon icon={faSearch} /></p>
            <input type="text" onChange={handleChange} />
        </div>
    )
}