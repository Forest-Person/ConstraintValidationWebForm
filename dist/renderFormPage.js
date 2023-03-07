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

    




</form>

`

    content.insertAdjacentHTML('afterbegin',browserForm)

const theForm = document.querySelector('.browserForm')

    theForm.noValidate = true
    

}

export { formValidation }