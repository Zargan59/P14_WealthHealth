export default function  NumberPage ({ currentPage, numberpage, changePage }){

    return(
            <button onClick={changePage} value={numberpage+1}  className={currentPage===numberpage+1? "pageButton currentPage" :"pageButton" } key={numberpage}> {numberpage+1}  </button>
    )
}