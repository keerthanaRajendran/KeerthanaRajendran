import { shallowMount } from "@vue/test-utils";
import Component from './Component'

describe("Component.vue", () => {
    it("renders basic page", async () => {
        let wrapper = shallowMount(Component);
        await wrapper.vm.$nextTick();
        expect(wrapper).toMatchSnapshot();
    });
});