// get input value
function getInputValueById (id){

    // get Inpur Value

        const inputValue = document.getElementById(id).value;
        const inputNumber = parseFloat(inputValue);
        return inputNumber;

}

// get available balance text field
function  getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}