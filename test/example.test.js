import checkResult from '../checkResult.js';

const test = QUnit.test;


test('draw', function(assert){
    const player = 'rock';
    const computer = 'rock';
    const expect = 'draw';

    const result = checkResult(player, computer);

    assert.equal(result, expect);
}); 


test('win', function(assert){
    const player = 'scissors';
    const computer = 'paper';
    const expect = 'win';

    const result = checkResult(player, computer);

    assert.equal(result, expect);
}); 


test('lose', function(assert){
    const player = 'paper';
    const computer = 'scissors';
    const expect = 'lose';

    const result = checkResult(player, computer);

    assert.equal(result, expect);
}); 



