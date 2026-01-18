import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from "vue";
import App from "../src/App.vue";

test('Ap is rending', async ({ page }) => {
    const app = mount(App);

    await app.find('span[id="navbar-stats"]').trigger('click');

    // Players name
    expect(app.text()).toContain('Statistics of the 30 last days');
})