export default function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
    if (randomNumber < 4) return ('Rock');
    else if (randomNumber > 3 && randomNumber < 7) return ('Paper');
    else (randomNumber > 6); 
    return ('Scissors');
}

