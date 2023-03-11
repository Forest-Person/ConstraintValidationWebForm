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
    
    <input required name="zipcode" type="text" pattern="[0-9]*" maxlength = '5'>


        </div>

    <div class = 'formElement'> 

    <label for 'password'>Password:</label>
    <p style = 'display:none; color:red;' class = "passWarning" for 'password'> *** Passwords do not Match ***</p>
    <input class = 'password' required type = 'password' maxlength = '16' name = 'password'>


        </div>

    
    <div class = 'formElement'> 

    <label for 'passwordConfirm'>Password Confirmation:</label>
    <input class = 'passwordConfirm' required type = 'password' maxlength = '16' name = 'password'>


    
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
    
    
        //-----------Pasword Confirmation----------//

    const pass1 = document.querySelector('.password')
    const pass2 = document.querySelector('.passwordConfirm')

    if(pass1.value !== pass2.value){
        
        

        document.querySelector('.passWarning').style.display = 'block'
        pass1.classList.add('invalid') 
        pass2.classList.add('invalid')
        
        e.preventDefault()
        
    
    }
    if(pass1.value === pass2.value && pass1.value !== '' && pass2.value !== '') {
        
        const browserForm = document.querySelector('.browserForm')
        pass1.classList.remove('invalid')
        pass2.classList.remove('invalid')
        document.querySelector('.passWarning').style.display = 'none'
        
        
    
    }

    
    
    })

   const  signupFormArray =  Array.from(signupForm)

   signupFormArray.forEach((item)=>{ item.addEventListener('blur',(event)=>{

    if(!event.target.checkValidity()){

        event.target.classList.add('invalid')
    }else{
        return
    }


   },true)

})





countryList()
}
        

export { formValidation }