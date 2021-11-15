function Calculator(){
    
    let num1=Number(prompt("Enter your Number 1:"));
    let num2=Number(prompt("Enter your Number 2:"));
    document.getElementById("results").innerHTML=`
    <p class="add"> ${num1} + ${num2} = ${num1 + num2}</p>

    <p class="multi"> ${num1} * ${num2} = ${num1 * num2}</p>

    <p class="sub"> ${num1} - ${num2} = ${num1 - num2}</p>

    <p class="divd"> ${num1} / ${num2} = ${num1 / num2}</p>
`;
}
