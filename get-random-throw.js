export default function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
    if (randomNumber < 4) return ('rock');
    else if (randomNumber > 3 && randomNumber < 7) return ('paper');
    else (randomNumber > 6); 
    return ('scissors');
}

