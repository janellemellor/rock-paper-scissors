import getRandomThrow from './get-random-throw';


const checkResult = (player, computer) => {

    if (player === getRandomThrow) return 'draw';
    else if (player === 'Rock' & (getRandomThrow === 'Paper' || 'Scissors')) return 'win';
    else if (player === 'Paper' & (getRandomThrow === 'Rock' || 'Scissors')) return 'lose';
        
};

export default checkResult;


