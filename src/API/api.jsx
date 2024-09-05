

export default function pushInLS(employee){
    localStorage.setItem('employees', JSON.stringify(employee));
}

export default function getLS(employee){
    localStorage.getItem("employee")
}