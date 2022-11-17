import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
	it('renders properly', () => {
		// @ts-expect-error vue-tsc diff
		const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });

		expect(wrapper.text()).toContain('Hello Vitest');
	});
});
