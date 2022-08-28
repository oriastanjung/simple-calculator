const displayResult = document.getElementById("displayResult");


const pressButton = (number) => {

    if(displayResult.innerText === "0"){
        displayResult.innerText = number;
    }else{
        displayResult.innerText += number;
    }
}


const clearButton = () => {
    displayResult.innerText = "0"
}


const calculate = () => {
    let result = Number(eval(displayResult.innerText))
    // console.log(result)
    displayResult.innerText = result

}