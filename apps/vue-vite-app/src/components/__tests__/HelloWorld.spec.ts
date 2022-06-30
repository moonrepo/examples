import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
	it('renders properly', () => {
		const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });

		// eslint-disable-next-line jest/no-standalone-expect
		expect(wrapper.text()).toContain('Hello Vitest');
	});
});
