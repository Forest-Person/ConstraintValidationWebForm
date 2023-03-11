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
        <select required class = 'selectCountry' name = 'country' >
        <option  value = '' ></option>
        
        </select>
    </div>

    <div class = 'formElement'> 

    <label for 'zipcode'>Zip Code</label>
    
    <input required name="zipcode" type="text" pattern="[0-9]*">


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

    const signupForm = document.querySelectorAll('.browserForm')
    const selectCountry = document.querySelector('.selectCountry')
    const submitButton = document.querySelector('.submitButton')
    
    
    

    submitButton.addEventListener('click',(e)=>{

        
        const formElements = Array.from(document.querySelectorAll('input'))

        formElements.map((item=>{

            if(!item.checkValidity()){
                item.classList.add('invalid')
            }else{item.classList.remove('invalid')}

        }))
          
    
        if(selectCountry.value===''){
            selectCountry.setCustomValidity(''); 
            selectCountry.classList.add('invalid')
            selectCountry.setCustomValidity('Must choose a country!')
           
            e.preventDefault()
            

        
        }else if (selectCountry.value!==''){selectCountry.setCustomValidity(''); selectCountry.classList.remove('invalid')}
    
    })

    




countryList()
}
        

export { formValidation }