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

        <button type = 'button'>CLick to load country</button>
        <div class = 'imageDiv'>
        </div>
    </div>

</form>

`


//On form submit we should load a flag of the country that was chosen.


    content.insertAdjacentHTML('afterbegin',browserForm)

    const imageDiv = document.querySelector('.imageDiv')

    const theButton = document.querySelector('button')

    const browserFormDiv = document.querySelector('.browserForm')

    browserFormDiv.noValidate = true

    countryList() //loads the country list into the options of the select country options

    theButton.addEventListener('click',(e)=>{ //show country relavent image when user clicks on button based on country value in selector.

        e.preventDefault()
        imageDiv.replaceChildren()
        const countryImage = document.createElement('img')
        const countrySelected = document.querySelector('.selectCountry')
        countryImage.src = ''
        
        countryImage.src = `https://source.unsplash.com/random/?${countrySelected.value}?sig=${Math.floor(Math.random()*100)}`
        imageDiv.appendChild(countryImage)
        browserFormDiv.reset()
        
    })

}
        

export { formValidation }