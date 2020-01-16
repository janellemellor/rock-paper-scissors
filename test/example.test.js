import checkResult from '../checkResult.js';

const test = QUnit.test;


test('Draw', function(assert){
    const expect = computer === player;
    const result = checkResult(player,computer);

    assert.equal(result, expect);
}); 






