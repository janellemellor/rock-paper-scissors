import getRandomThrow from './get-random-throw';

const computer = getRandomThrow ();

const checkResult = (player, computer) => {
    if (player === computer) return ('draw');
    if (player < computer) return ('lose');
    if (player > computer) return ('win');
};

export default checkResult;


