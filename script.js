
import { randomizer, addParticipant } from './functions.js'

const moveForwardBtn = document.querySelector('#move-forward');
const addNameBtn = document.querySelector('#addName');
const generateNameBtn = document.querySelector('#drag-winner');
const spinnerContainer = document.querySelector('.spinner-container.hidden');
const formContainer = document.querySelector('.container.mt-5');
const dragAWinnerContainer = document.querySelector('#drag');
const resultContainer = document.querySelector('#result-container');
const resultName = document.querySelector('.results');
export const addedNamesContainer = document.querySelector('.added-names-container');
export const nameInput = document.querySelector('#name-input');
export const numberInput = document.querySelector('#number-input');


export let participants = [];

addNameBtn.addEventListener('click', addParticipant);
nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addParticipant();
    }
});

numberInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addParticipant();
    }
});


moveForwardBtn.addEventListener('click', () => {

    if (participants.length > 0) {

        formContainer.classList.add('hidden');
        dragAWinnerContainer.classList.remove('hidden');

    } else {

        alert('Lägg till minst en deltagare innan du går vidare.');

    }
});


generateNameBtn.addEventListener('click', () => {
    let userInput = '';

    participants.forEach((participant) => {
        userInput += `${participant.name}, `.repeat(participant.places);
    });

    userInput = userInput.slice(0, -2);

    if (userInput.trim() !== '') {
        const results = randomizer(userInput);

        dragAWinnerContainer.classList.add('hidden');
        spinnerContainer.classList.remove('hidden');

        setTimeout(() => {
            spinnerContainer.classList.add('hidden');
            resultName.textContent = results + '!';
            resultContainer.classList.remove('hidden');
        }, 2555);
    } else {
        alert('Lägg till minst en deltagare med ett giltigt antal platser innan du drar en vinnare.');
    }
});


