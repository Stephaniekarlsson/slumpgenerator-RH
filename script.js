export const drawRandomName = (names) => {
    const maxLength = names?.length ?? 0;
    const randomNumber = Math.floor(Math.random() * maxLength);

    console.log(names[randomNumber]);

    return names[randomNumber];
}

export const createNameArray = (userInput) => {
    if (!userInput ||userInput.length === 0){
        return 'Inga namn finns!';
    }
    console.log(userInput.split(', '));

    return userInput.split(', ');
}

export const randomizer = (userInput) => {
    const nameArray = createNameArray(userInput);

    drawRandomName(nameArray);
}

const generateNameBtn = document.querySelector('.btn');

generateNameBtn.addEventListener ('click', () => {
    const userInput = document.querySelector('#exampleFormControlInput1').value;
    randomizer(userInput);
});

// Exempel 1, Exempel 2, Exempel 3, Exempel 4, Exempel 5, Exempel 6, Exempel 7, Exempel 8, Exempel 9, Exempel 10, Exempel 11, Exempel 12