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

export const randomizer = (userInput) => {
    const nameArray = createNameArray(userInput);

    return drawRandomName(nameArray);
};

export const addParticipant = () => {

    if (nameInput.value.trim() !== '' && numberInput.value > 0) {
    
        participants.push({ name: nameInput.value, places: parseInt(numberInput.value) });

        updateAddedNames();

        nameInput.value = '';
        numberInput.value = 1;

        console.log(participants);
    } else {
        alert('Vänligen ange både namn och antal platser.');
    }
};

export const updateAddedNames = () => {
    addedNamesContainer.innerHTML = '<strong>Tillagda namn:</strong><br>';
    participants.forEach((participant) => {
        addedNamesContainer.innerHTML += `${participant.name} (platser: ${participant.places})<br>`;
    });
};

