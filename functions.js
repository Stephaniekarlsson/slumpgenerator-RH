import { participants, nameInput, numberInput, addedNamesContainer} from "./script.js";

export const drawRandomName = (names) => {
    const maxLength = names?.length ?? 0;
    const randomNumber = Math.floor(Math.random() * maxLength);

    console.log(names[randomNumber]);

    return names[randomNumber];
};

export const createNameArray = (userInput) => {
    if (!userInput || userInput.length === 0) {
        return 'Inga namn finns!';
    }
    console.log(userInput.split(', '));

    return userInput.split(', ');
};


export const randomizer = (userInput, numberOfWinners) => {
    const nameArray = createNameArray(userInput);

    const shuffledArray = shuffleArray(nameArray);

    const winners = [];
    for (let i = 0; i < Math.min(numberOfWinners, shuffledArray.length); i++) {
        const prizeCategory = getPrizeCategory(i + 1);
        winners.push({ name: shuffledArray[i], prize: prizeCategory });
    }

    return winners;
};


const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

export const addParticipant = () => {
    const nameInput = document.querySelector('#name-input').value.trim();
    const numberInput = parseInt(document.querySelector('#number-input').value, 10);

    if (nameInput !== '' && !isNaN(numberInput) && numberInput > 0) {
        participants.push({ name: nameInput, places: numberInput });
        updateAddedNames();
        resetInputFields();
    } else {
        alert('Vänligen ange både namn och ett giltigt antal platser.');
    }
};

export const removeParticipant = (index) => {
    participants.splice(index, 1);
    updateAddedNames();
};

export const updateAddedNames = () => {
    addedNamesContainer.innerHTML = '<strong>Tillagda namn:</strong><br>';
    participants.forEach((participant, index) => {
        const participantElement = document.createElement('div');
        participantElement.innerHTML = `
            ${participant.name} (platser: ${participant.places})
            <button type="button" class="remove-button">X</button><br>
        `;

        const removeButton = participantElement.querySelector('.remove-button');
        removeButton.addEventListener('click', () => removeParticipant(index));

        addedNamesContainer.appendChild(participantElement);
    });
};

const resetInputFields = () => {
    const nameInput = document.querySelector('#name-input');
    const numberInput = document.querySelector('#number-input');

    nameInput.value = '';
    numberInput.value = '1';

    nameInput.focus(); 
};


const getPrizeCategory = (position) => {
    switch (position) {
        case 1:
            return 'Första pris';
        case 2:
            return 'Andra pris';
        default:
            return `Pris ${position}`;
    }
};

export const displayPrizes = (winners) => {
    const prizesContainer = document.querySelector('#result-container');
    prizesContainer.innerHTML = '';

    if (winners.length === 1) {
        const winner = winners[0];
        prizesContainer.innerHTML += `<strong>Stort grattis! </strong><br><span class="winner-text">${winner.name}</span><br>`;
    } else {
        prizesContainer.innerHTML += '<strong>Stort grattis!</strong><br>';

        winners.forEach((winner) => {
            prizesContainer.innerHTML += `<span class="winner-text">${winner.prize}: ${winner.name}</span><br>`;
        });
    }
    confetti({
        particleCount: 300,
        spread: 200,

    })

};


