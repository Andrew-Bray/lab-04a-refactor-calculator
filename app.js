import { addClickHandler, subClickHandler, multClickHandler, divClickHandler } from './clickHandlers.js';

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');

addButton.addEventListener('click', addClickHandler);

subButton.addEventListener('click', subClickHandler);

multButton.addEventListener('click', multClickHandler);

divButton.addEventListener('click', divClickHandler);

