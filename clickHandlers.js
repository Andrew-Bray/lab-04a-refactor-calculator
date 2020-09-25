import { add, subtract, multiply, divide  } from './mathutils.js'

const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addResult = document.getElementById('add-result');
const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subResult = document.getElementById('sub-result');
const multInput1 = document.getElementById('mult-input1');
const multInput2 = document.getElementById('mult-input2');
const multResult = document.getElementById('mult-result');
const divInput1 = document.getElementById('div-input1');
const divInput2 = document.getElementById('div-input2');
const divResult = document.getElementById('div-result');
const myHeader = document.getElementById('my-header');

export function addClickHandler() {
    addResult.classList.add('color-ani2');
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    const addNum1 = Number(value1);
    const addNum2 = Number(value2);

    const sum = add(addNum1, addNum2);
    setTimeout(() => {
        addResult.textContent = sum;  
    }, 400);
}

export function subClickHandler() {
    subResult.classList.add('color-ani2');
    const value1 = subInput1.value;
    const value2 = subInput2.value;

    const subNum1 = Number(value1);
    const subNum2 = Number(value2);

    const sum = subtract(subNum1, subNum2);
    setTimeout(() => {
        subResult.textContent = sum;  
    }, 400);
}

export function multClickHandler() {
    multResult.classList.add('color-ani2');
    const value1 = multInput1.value;
    const value2 = multInput2.value;

    const multNum1 = Number(value1);
    const multNum2 = Number(value2);

    const sum = multiply(multNum1, multNum2);
    setTimeout(() => {
        multResult.textContent = sum;  
    }, 400);
}

export function divClickHandler() {
    divResult.classList.add('color-ani2');
    const value1 = divInput1.value;
    const value2 = divInput2.value;

    const divNum1 = Number(value1);
    const divNum2 = Number(value2);

    const sum = divide(divNum1, divNum2);
    setTimeout(() => {
        divResult.textContent = sum;  
    }, 400);
}
