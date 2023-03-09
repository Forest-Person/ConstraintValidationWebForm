import { countryList } from "../CountryList"

const formValidation = () => {

    //A browser form which collects Email, Country, 
    //Zip Code, Password and Password Confirmation fields.

    //get content div
    const content = document.querySelector('#content')


 const  browserForm =  `
    
<form  class = 'browserForm'> 
    <fieldset>
    <legend>Travel Contact Registry</legend>

    <div class = 'formElement'>
        <label for = 'email'>Email</label>
        <input type = 'email' name = 'email' required>
    </div>

    <div class = 'formElement'>
        <label for = 'country'>Country Selection</label>
        <select class = 'selectCountry' name = 'country' required>
        <option>--Select a Country--</option>
        
        </select>
    </div>

    <div class = 'formElement'> 

    <label for 'zipcode'>Zip Code</label>
    <input type="number" pattern="\d*"  placeholder="Zip Code" max="99999" maxlength = '5' name = 'zipcode'/>


        </div>

    <div class = 'formElement'> 

    <label for 'password'>Password:</label>
    <input required type = 'password' maxlength = '16' name = 'password'>


        </div>

    
    <div class = 'formElement'> 

    <label for 'passwordConfirm'>Password Confirmation:</label>
    <input required type = 'password' maxlength = '16' name = 'password'>


    
        </div>

        <button class = 'submitButton' type = 'submit'>Submit Form</button>
    <div class = 'imageDiv'>
        
    </div>

    </fieldset>
    

</form>

`


//On form submit we should load a flag of the country that was chosen.


    content.insertAdjacentHTML('afterbegin',browserForm)



    ////--------------Validation API -------------////

    const signupForm = document.querySelector('.browserForm')
    const selectCountry = document.querySelector('.selectCountry')

    

    const formInputs = document.querySelector('form')

    formInputs.addEventListener('submit',(e)=>{

        if (formInputs.checkValidity() === false){
            console.log('Form is invalid')
            e.preventDefault()}
            
    
        if(selectCountry.value==='--Select a Country--'){
            selectCountry.classList.add('invalid')
            
            e.preventDefault()
        }
    
    })





countryList()
}
        

export { formValidation }