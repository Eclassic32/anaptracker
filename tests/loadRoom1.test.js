import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from "vue";
import App from "../src/App.vue";
const mock_tracker = require("./mock_datas/room_1/tracker.json");
const mock_static_tracker = require("./mock_datas/room_1/static_tracker.json");
const mock_slot_data = require("./mock_datas/room_1/slot_data.json");
const mock_room = require("./mock_datas/room_1/room.json");

test('Ap is rending', async ({ page }) => {
    const app = mount(App);
    
    // We use the router to go to the statistics page.
    await app.componentVM.route('room', null, 'd8mHW-auQvyYtBpEx9b67w');

    if (!import.meta.env.VITE_OFFLINE) {
        // We wait for 3 seconds if we test online.
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    else {
        await app.componentVM.beginTrackingDataFromRoom(mock_room);
        await app.componentVM.getStaticData(mock_static_tracker);
        await app.componentVM.getSlotData(mock_slot_data);
        await app.componentVM.refreshTrackerData(mock_tracker);
    }
    
    // Players name
    expect(app.text()).toContain('TomPounce_B3313');
    expect(app.text()).toContain('TomPounce_CP');
    expect(app.text()).toContain('TomPounce_P_Crys');
    expect(app.text()).toContain('TomPounce_FFMQ');
    expect(app.text()).toContain('Tom_The_PIRATE');
    expect(app.text()).toContain('TomPounce_SM');
})