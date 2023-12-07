export const drawRandomName = (names) => {
    const maxLength = names?.length ?? 0;
    const randomNumber = Math.floor(Math.random() * maxLength);

    return names[randomNumber];
}

export const createNameArray = (userInput) => {
    if (userInput ||userInput.length > 0){
        return 'Inga namn finns!';
    }

    return userInput.split(', ');
}