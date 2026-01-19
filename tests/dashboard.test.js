import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from "vue";
import App from "../src/App.vue";

test('Ap is rending', async ({ page }) => {
    const app = mount(App);

    
    await app.componentVM.route('statistics', null, null);

    // Players name
    expect(app.text()).toContain('Statistics of the 30 last days');
})