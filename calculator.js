let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_Numbers_Previews_V = document.getElementById('calculator_input_Numbers_Previews');

let calculator_input_AC_V = document.getElementById('calculator_input_AC');

let DisplayValue;

function display(DisplayValue) {
    calculator_input_Number_V.value += DisplayValue; 
}

calculator_input_AC_V.addEventListener('click',()=>{
    calculator_input_Number_V.value = "";
    calculator_input_Numbers_Previews_V.value = "";
})

function displaySolve() {
    let eq = calculator_input_Number_V.value;
    calculator_input_Numbers_Previews_V.value = eq;

    let y = eval(eq);
    calculator_input_Number_V.value = y;
}