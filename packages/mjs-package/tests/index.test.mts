import { add } from '../src/index.mjs';

describe('add()', () => {
	it('should add numbers', () => {
		expect(add(5, 5)).toBe(10);
	});
});
