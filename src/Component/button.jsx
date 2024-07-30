export default function Button({text, handleClick}){
    return(
        <div>
            <button onClick={handleClick} className="button">{text}</button>
        </div>
    )
}