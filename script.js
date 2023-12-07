export const drawRandomName = (names) => {
    const maxLength = names?.length ?? 0;
    const randomNumber = Math.floor(Math.random() * maxLength);

    console.log(names[randomNumber]);

    return names[randomNumber];
}

export const createNameArray = (userInput) => {
    if (userInput ||userInput.length > 0){
        return 'Inga namn finns!';
    }
    console.log(userInput.split(', '));

    return userInput.split(', ');
}