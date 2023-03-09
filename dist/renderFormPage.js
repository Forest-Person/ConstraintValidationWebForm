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
        <input type = 'email' name = 'email'>
    </div>

    <div class = 'formElement'>
        <label for = 'country'>Country Selection</label>
        <select class = 'selectCountry' name = 'country'>
        
        </select>
    </div>

    <div class = 'formElement'> 

    <label for 'zipcode'>Zip Code</label>
    <input type="tel" pattern="[0-9]*" placeholder="Zip Code" max="99999" maxlength = '5' name = 'zipcode'/>


        </div>

    <div class = 'formElement'> 

    <label for 'password'>Password:</label>
    <input type = 'password' maxlength = '16' name = 'password'>


        </div>

    
    <div class = 'formElement'> 

    <label for 'passwordConfirm'>Password Confirmation:</label>
    <input type = 'password' maxlength = '16' name = 'password'>


    
        </div>

        <button type = 'button'>CLick to load country</button>
    <div class = 'imageDiv'>
        
    </div>

    </fieldset>
    

</form>

`


//On form submit we should load a flag of the country that was chosen.


    content.insertAdjacentHTML('afterbegin',browserForm)




countryList()
}
        

export { formValidation }