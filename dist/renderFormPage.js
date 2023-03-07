import { countryList } from "../CountryList"

const formValidation = () => {

    //A browser form which collects Email, Country, 
    //Zip Code, Password and Password Confirmation fields.

    //get content div
    const content = document.querySelector('#content')


 const  browserForm =  `
    
<form  class = 'browserForm'> 

    <div>
        <label for = 'email'>Email</label>
        <input type = 'email' name = 'email'>
    </div>

    <div>
        <label for = 'country'>Country Selection</label>
        <select class = 'selectCountry' name = 'country'>
        
        </select>
    </div>

</form>

`


//On form submit we should load a flag of the country that was chosen.


    content.insertAdjacentHTML('afterbegin',browserForm)

    const theForm = document.querySelector('.browserForm')

    theForm.noValidate = true

    countryList() //loads the country list into the options of the select country options


}
        

export { formValidation }