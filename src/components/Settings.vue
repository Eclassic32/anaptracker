<template>
    <div class="text-center text-white">
        <div class="text-2xl my-4">Settings</div>
        <div class="mt-6 text-center">
            <div class="text-xl">Row size</div>
            <div class="flex flex-row w-auto font-roboto justify-center">
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.row_size == 0, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.row_size != 0 }" v-on:click="changeSize(0)">S (small)</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.row_size == 1, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.row_size != 1 }" v-on:click="changeSize(1)">M (medium)</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.row_size == 2, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.row_size != 2 }" v-on:click="changeSize(2)">L (large)</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.row_size == -1, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.row_size != -1 }" v-on:click="changeSize(-1)">Auto</div>
                </div>
            </div>
            <div>
                <span v-if="$parent.DEFAULT_OPTIONS.row_size == 0">Small : only small icons will be displayed. Font will be small.</span>
                <span v-if="$parent.DEFAULT_OPTIONS.row_size == 1">Medium : small icons and titles on items blocks will be displayed. Font will be medium.</span>
                <span v-if="$parent.DEFAULT_OPTIONS.row_size == 2">Large : big icons and titles on items blocks will be displayed. Font will be large.</span>
                <span v-if="$parent.DEFAULT_OPTIONS.row_size == -1">Auto : size will be adjusted depending on the number of players on the multiworld.</span>
            </div>
        </div>
        <div class="mt-6 text-center">
            <div class="text-xl">Default displaying options</div>
            <div class="flex flex-row w-auto font-roboto justify-center">
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.show_done, ' bg-gray-700': !$parent.DEFAULT_OPTIONS.show_done }" v-on:click="changeShowDone()">Players done</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.show_slot_number, ' bg-gray-700': !$parent.DEFAULT_OPTIONS.show_slot_number }" v-on:click="changeShowSlotNumber()">Slot #</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.show_hints, ' bg-gray-700': !$parent.DEFAULT_OPTIONS.show_hints }" v-on:click="changeShowHints()">Hints</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.show_timer, ' bg-gray-700': !$parent.DEFAULT_OPTIONS.show_timer }" v-on:click="changeShowTimer()">Inactivity timers</div>
                </div>
            </div>
            <div>
                <div v-if="$parent.DEFAULT_OPTIONS.show_done == 0">Player who goaled their game won't be shown (after 10min of goal completion).</div>
                <div v-if="$parent.DEFAULT_OPTIONS.show_slot_number">Slot number will be shown.</div>
                <div v-if="$parent.DEFAULT_OPTIONS.show_hints">Number of hints will be shown (red are recieved hints, blue are sent hints).</div>
                <div v-if="$parent.DEFAULT_OPTIONS.show_timer">Inactivity timers will be shown.</div>
            </div>
        </div>
        <div class="mt-6 text-center">
            <div class="text-xl">Default sort order</div>
            <div class="flex flex-row w-auto font-roboto justify-center">
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.sort_by == 0, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.sort_by != 0 }" v-on:click="changeSortBy(0)">Slot # (Name)</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.sort_by == 7, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.sort_by != 7 }" v-on:click="changeSortBy(7)">Game</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.sort_by == 3, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.sort_by != 3 }" v-on:click="changeSortBy(3)">Total checks</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.sort_by == 1, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.sort_by != 1 }" v-on:click="changeSortBy(1)">Checks done</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.sort_by == 2, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.sort_by != 2 }" v-on:click="changeSortBy(2)">% done</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.sort_by == 4, ' bg-gray-700':  $parent.DEFAULT_OPTIONS.sort_by != 4 }" v-on:click="changeSortBy(4)">Remainings checks</div>
                </div>
            </div>
            <div>
                Slots will be sorted by
                <span v-if="$parent.DEFAULT_OPTIONS.sort_by == 0">slot number (usually by name).</span>
                <span v-if="$parent.DEFAULT_OPTIONS.sort_by == 1">checks done on the multiworld.</span>
                <span v-if="$parent.DEFAULT_OPTIONS.sort_by == 2">percent completion on the multiworld.</span>
                <span v-if="$parent.DEFAULT_OPTIONS.sort_by == 3">total checks on their game.</span>
                <span v-if="$parent.DEFAULT_OPTIONS.sort_by == 4">the number of checks remaining in their game.</span>
                <span v-if="$parent.DEFAULT_OPTIONS.sort_by == 7">same name.</span>
            </div>
        </div>
        <div class="mt-6 text-center">
            <div class="text-xl">Local Storage use</div>
            Local Storage allows you to store some useful information so you don't have to load it again (or make more manipulations on a page).<br />
            Data stored into your local storage is, as it says, stored on your computer (will only goes off if you clear your browser cache)<br />
            <div class="flex flex-row w-auto font-roboto justify-center">
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.store_datapackage, ' bg-gray-700':  !$parent.DEFAULT_OPTIONS.store_datapackage }" v-on:click="changeStorePackage()">Store Datapackages</div>
                </div>
                <div class="p-2">
                    <div class="p-2 cursor-pointer rounded-md" :class="{'bg-emerald-600': $parent.DEFAULT_OPTIONS.store_individual_rooms, ' bg-gray-700':  !$parent.DEFAULT_OPTIONS.store_individual_rooms }" v-on:click="changeStoreRooms()">Store settings per room</div>
                </div>
            </div>
            <div>
                <div v-if="$parent.DEFAULT_OPTIONS.store_datapackage">Datapackages (bundles that contains game info) will be stored.</div>
                <div v-if="$parent.DEFAULT_OPTIONS.store_individual_rooms">Rooms settings will be saved on each room.</div>
            </div>
            <div class="flex flex-row w-auto font-roboto justify-center">
                <div class="p-6">
                    <div class="p-2 cursor-pointer rounded-md bg-red-500" v-on:click="clearLocalStorage()">Clear my storage data</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ANAP_CONFIG from "../anapconfig.js";

    export default {
        name: 'navbar',
        props: {
            data: Object,
        },
        data: function () {
            return {
        
                showMenu: false,
                showAdditionals: false,
                showSortBy: false,
                ANAP_CONFIG
            }
        },

        methods: {
            changeShowDone: function () {
                this.$parent.DEFAULT_OPTIONS.show_done = this.$parent.DEFAULT_OPTIONS.show_done + 1;
                if (this.$parent.DEFAULT_OPTIONS.show_done > 1)
                    this.$parent.DEFAULT_OPTIONS.show_done = 0;
                this.$parent.saveDefaultOptions();
            },
            changeShowTimer: function () {
                this.$parent.DEFAULT_OPTIONS.show_timer = this.$parent.DEFAULT_OPTIONS.show_timer + 1;
                if (this.$parent.DEFAULT_OPTIONS.show_timer > 1)
                    this.$parent.DEFAULT_OPTIONS.show_timer = 0;
                this.$parent.saveDefaultOptions();
            },
            changeShowHints: function () {
                this.$parent.DEFAULT_OPTIONS.show_hints = this.$parent.DEFAULT_OPTIONS.show_hints + 1;
                if (this.$parent.DEFAULT_OPTIONS.show_hints > 1)
                    this.$parent.DEFAULT_OPTIONS.show_hints = 0;
                this.$parent.saveDefaultOptions();
            },
            changeShowSlotNumber: function () {
                this.$parent.DEFAULT_OPTIONS.show_slot_number = this.$parent.DEFAULT_OPTIONS.show_slot_number + 1;
                if (this.$parent.DEFAULT_OPTIONS.show_slot_number > 1)
                    this.$parent.DEFAULT_OPTIONS.show_slot_number = 0;
                this.$parent.saveDefaultOptions();
            }, 
            changeShowChecksLefts: function () {
                this.$parent.DEFAULT_OPTIONS.show_checks_left = this.$parent.DEFAULT_OPTIONS.show_checks_left + 1;
                if (this.$parent.DEFAULT_OPTIONS.show_checks_left > 1)
                    this.$parent.DEFAULT_OPTIONS.show_checks_left = 0;
                this.$parent.saveDefaultOptions();
            },
            changeStorePackage: function () {
                this.$parent.DEFAULT_OPTIONS.store_datapackage = this.$parent.DEFAULT_OPTIONS.store_datapackage + 1;
                if (this.$parent.DEFAULT_OPTIONS.store_datapackage > 1)
                    this.$parent.DEFAULT_OPTIONS.store_datapackage = 0;
                this.$parent.saveDefaultOptions();
            },
            changeStoreRooms: function () {
                this.$parent.DEFAULT_OPTIONS.store_individual_rooms = this.$parent.DEFAULT_OPTIONS.store_individual_rooms + 1;
                if (this.$parent.DEFAULT_OPTIONS.store_individual_rooms > 1)
                    this.$parent.DEFAULT_OPTIONS.store_individual_rooms = 0;
                this.$parent.saveDefaultOptions();
            },
            changeSize: function (num) {
                this.$parent.DEFAULT_OPTIONS.row_size = num;
                if (this.$parent.DEFAULT_OPTIONS.row_size > 2)
                    this.$parent.DEFAULT_OPTIONS.row_size = -1;
                this.$parent.saveDefaultOptions();
            },
            changeSortBy: function (num) {
                this.$parent.DEFAULT_OPTIONS.sort_by = num;
                if (this.$parent.DEFAULT_OPTIONS.sort_by > 7 || this.$parent.OPTIONS.sort_by < 0)
                    this.$parent.DEFAULT_OPTIONS.sort_by = 0;
                this.$parent.saveDefaultOptions();
            },
            clearLocalStorage: function () {
                if (confirm('Are you sure you want to clear your data stored in your browser ?')) {

                    localStorage.clear();
                    this.$parent.saveDefaultOptions();
                }
            }
        },
        components: {
        }
    }
</script>
