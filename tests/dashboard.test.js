import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from "vue";
import App from "../src/App.vue";
const mock_board = require("./mock_datas/dashboard.json");

test('Ap is loading dashboard', async ({ page }) => {
    const app = mount(App);

    // We use the router to go to the statistics page.
    await app.componentVM.route('statistics', null, null);

    if (!import.meta.env.VITE_OFFLINE) {
        // We wait for 3 seconds if we test online.
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    else {
        var stats = app.componentVM.getStatsObject();
        await stats.loadStatistics(mock_board);
    }
    
    // We check if the dashboard table is loaded.
    expect(app.text()).toContain('Statistics of the 30 last days');
    expect(app.text()).toContain('Hollow Knight');
    expect(app.text()).toContain('Celeste (Open World)');
    expect(app.text()).toContain('A Hat in Time');
    expect(app.text()).toContain('Ship of Harkinian');
})