import '../Style/main.css';
import Header from '../Component/Header';
import InputFormEmployee from "../Component/FormInput"
import Button from '../Component/button';
import { useState } from 'react';

export default function HRnet() {
const [firstName, setFirstName]=useState('')
const [lastName, setLastName]=useState("")
const [birthdate, setBirthDate]=useState("")
const [department, setDepartment]=useState("")
const [street, setStreet]=useState("")
const [city, setCity]=useState("")
const [zipCode, setZipCode] = useState("")

  //Récupérer toutes les infos
  

  const handleSaveEmployee = ()=>{
    console.log("Employee save");
  }

  return (
    <div className="App">
      <Header origin="Home" />
      <main className='newEmployeeContent'>
        <h2>Create Employee</h2>
        <section className="formSection">
            <form action="#" id="create-employee">
                <div className="formFlex">
                    <InputFormEmployee label="first-name" content="First Name" type="text"   />
                    <InputFormEmployee label="last-name" content="Last Name" type="text"   />
                </div>
                <div className="formFlex">
                    <InputFormEmployee label="last-name" content="Date of Birth" type="text"   />
                    <InputFormEmployee label="last-name" content="Start Date" type="text"   />
                </div>
                <fieldset className="adress">
                    <legend>Address</legend>
                    <div className="formFlex">
                        <InputFormEmployee label="street" content="Street" type="text" />
                        <InputFormEmployee label="city" content="City" type="city" />
                    </div>
                    <InputFormEmployee label="state" content="State" type="name" />
                    <InputFormEmployee label="zip-code" content="Zip Code" type="number" />
                </fieldset>
                <InputFormEmployee label="departement"type="select"  />

            </form>
        </section>
        <Button text="Save" handleClick={handleSaveEmployee}  />
      </main>
    </div>
  );
}
