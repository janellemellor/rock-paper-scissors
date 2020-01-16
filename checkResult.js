function checkResult(player, computer) {

    if (player === computer) return 'draw';
    else if (player === 'rock' && (computer === 'paper' || 'scissors')) return 'win';
    else if (player === 'scissors' && computer === 'paper') return 'win';
    else if (player === 'scissors' && computer === 'rock') return 'lose';
    else if (player === 'paper' && (computer === 'rock' || 'scissors')) return 'lose';       
}

export default checkResult;


