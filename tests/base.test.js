import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from "vue";
import App from "../src/App.vue";

test('Ap is rending', async ({ page }) => {
    const msg = 'A Normal AP Tracker'
    const app = mount(App);

    expect(app.text()).toContain(msg)
})