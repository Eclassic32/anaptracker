import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from "vue";
import App from "../src/App.vue";

test('Ap is rending', async ({ page }) => {
    const app = mount(App);

    await app.find('input[type="text"]').text('d8mHW-auQvyYtBpEx9b67w');
    await app.find('input[type="submit"]').trigger('click');

    // Players name
    expect(app.text()).toContain('TomPounce_B3313');
    expect(app.text()).toContain('TomPounce_CP');
    expect(app.text()).toContain('TomPounce_P_Crys');
    expect(app.text()).toContain('TomPounce_FFMQ');
    expect(app.text()).toContain('Tom_The_PIRATE');
    expect(app.text()).toContain('TomPounce_SM');
})