import '../Style/main.css';
import "../Style/modal.css"
import Header from '../Component/Header';
import InputFormEmployee from "../Component/FormInput"
import Button from '../Component/button';
import {  useState } from 'react';
import { states } from "../data/states";
import { department } from "../data/department";
import { createEmployee } from '../Redux/reducer';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import {Modal} from "modal-library-op-tristan"



export default function HRnet() {

  const dispatch =useDispatch()
  const [isModal, setIsModal]= useState(false)
  const [startDateSelected , setStartDateSelect] = useState()
  const [birthDateSelected, setBirthDaySelected]= useState()

  const handleSaveEmployee = ()=>{
    const e = document.getElementById('department')
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const birthDate = document.getElementById("date-of-birth").value
    const startDate = document.getElementById('start-date').value;
    const department =e.options[e.selectedIndex].text;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zip-code').value;

    const employee = {
      firstName,
      lastName,
      birthDate,
      startDate,
      department,
      street,
      city,
      state,
      zipCode
  };
  if(firstName && lastName && birthDate && startDate && department && street && city && state && state && zipCode ){
    dispatch(createEmployee(employee))
    setIsModal(true)

  }
  }

  return (
    <div className="App">
      <Header origin="Home" />
      {isModal?
        <Modal message="Employé créé" isOpen={isModal} setIsOpen={setIsModal} />: ""
      }
      <main className='newEmployeeContent'>
        <h2>Create Employee</h2>
        <section className="formSection">
            <form action="#" id="create-employee">
                <div className="formFlex">
                    <InputFormEmployee label="first-name" content="First Name" type="text"   />
                    <InputFormEmployee label="last-name" content="Last Name" type="text"   />
                </div>
                <div className="formFlex">
                    <InputFormEmployee  label="date-of-birth" content="Date of Birth" type="date" date={setBirthDaySelected} value={birthDateSelected} />
                    <InputFormEmployee label="start-date" content="Start Date" type="date" date={setStartDateSelect} value={startDateSelected}  />
                </div>
                <fieldset className="adress">
                    <legend>Address</legend>
                    <div className="formFlex">
                        <InputFormEmployee label="street" content="Street" type="text" />
                        <InputFormEmployee label="city" content="City" type="text" />
                    </div>
                    <InputFormEmployee label="state" content="State" type="select" data={states} />
                    <InputFormEmployee label="zip-code" content="Zip Code" type="number" />
                </fieldset>
                <InputFormEmployee label="department" content="Department" type="select" data={department} />

            </form>
        </section>
        <Button text="Save" handleClick={handleSaveEmployee}  />
      
      
      </main>
    </div>
  );
}
