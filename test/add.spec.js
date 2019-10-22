const assert = require('assert');
import Operations from '../calculator/operations';

let operations;

beforeEach(() => {
    operations = new Operations();
});

// Remove .skip once implemented
describe('Addition', () => {
    it('should calculate the sum of two numbers', () => {
        const result = operations.add("1", "3");
        assert.equal(result, 4);
    });
});