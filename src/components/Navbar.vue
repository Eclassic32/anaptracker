<template>
    <div>
        <nav class="flex flex-row flex-nowrap bg-gray-900">
            <div v-on:click="$parent.resetBack()" class="mr-4 p-3 text-green-600 cursor-pointer hover:text-white p-3">
                    <span class="font-semibold text-l tracking-tight">ANAP Tracker</span>

                <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="w-20 w-auto bg-gray-600 text-base z-50 float-left list-none text-left rounded shadow-lg mt-1 absolute mt-4" style="min-width:12rem">

                </div>
            </div>
            <div v-if="$parent.validRoom()" v-on:click="changeSize()" class="text-green-600 relative mr-4 cursor-pointer hover:text-white p-3">
                <span>Size {{ getSize() }}</span>
            </div>
            <div v-if="$parent.validRoom()" class="relative" @mouseleave="showAdditionals = 0">
                <div v-on:click="dropdownAdditionals()" class="text-green-600 relative mr-4 cursor-pointer hover:text-white p-3">
                    <span>Show ...</span>
                </div>
                <div v-bind:class="{'hidden': !showAdditionals, 'flex': showAdditionals}" class="rounded-sm w-20 w-auto bg-gray-500 text-base z-50 float-left list-none text-left rounded shadow-lg absolute" style="min-width:12rem">
                    <div class="flex flex-col bg-gray-500 w-full rounded-sm">
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.show_done }" v-on:click="changeShowDone()">Players done</div>
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.show_slot_number }" v-on:click="changeShowSlotNumber()">Slot #</div>
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.show_timer }" v-on:click="changeShowTimer()">Inactivity timers</div>
                    </div>
                </div>
            </div>
            <div v-if="$parent.validRoom()" class="relative" @mouseleave="showSortBy = 0" >
                <div v-on:click="dropdownSortBy()" class="text-green-600 relative mr-4 cursor-pointer hover:text-white p-3">
                    <span>Sort by</span>
                </div>
                <div  v-bind:class="{'hidden': !showSortBy, 'flex': showSortBy}" class="rounded-sm w-20 w-auto bg-gray-500 text-base z-50 float-left list-none text-left rounded shadow-lg absolute" style="min-width:12rem">

                    <div class="flex flex-col bg-gray-500 w-full rounded-sm">
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.sort_by == 0 }" v-on:click="changeSortBy(0)">Name</div>
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.sort_by == 7 }" v-on:click="changeSortBy(7)">Game</div>
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.sort_by == 3 }" v-on:click="changeSortBy(3)">Total checks</div>
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.sort_by == 1 }" v-on:click="changeSortBy(1)">Checks done</div>
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.sort_by == 2 }" v-on:click="changeSortBy(2)">% done</div>
                        <div class="p-2 cursor-pointer border-b-2" :class="{'bg-gray-200': $parent.OPTIONS.sort_by == 4 }" v-on:click="changeSortBy(4)">Remainings checks</div>
                    </div>
                </div>
            </div>
            <div class="text-green-600 relative justify-self-end font-roboto p-3 grow-5 text-right">
                <span v-if="$parent.brokenSlotData()" class="text-red-400 font-bold mr-2">/!\ Broken Slot Data /!\</span>
                <a href="https://github.com/OriginalTomPouce/anaptracker" target="_blank" class="cursor-pointer hover:text-white">v{{H_CONFIG.APP_VERION}}</a>
            </div>
        </nav>
    </div>
</template>

<script>
    import H_CONFIG from "../hconfig.js";

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
                H_CONFIG
            }
        },

        methods: {
            closeNavbar: function () {
                this.showMenu = false;
            },
            dropdownAdditionals: function () {
                if (this.showAdditionals == false) {
                    this.showSortBy = false;
                    this.showAdditionals = true;
                }
                else
                    this.showAdditionals = false;
            },
            dropdownSortBy: function () {
                if (this.showSortBy == false) {
                    this.showSortBy = true;
                    this.showAdditionals = false;
                }
                else
                    this.showSortBy = false;
            },
            getShowDone: function () {
                switch (this.$parent.OPTIONS.show_done) {
                    case 0:
                        return 'Hide';
                    case 1:
                        return 'Show';
                    default:
                        return 'Show';
                }
            },
            getShowTimer: function () {
                switch (this.$parent.OPTIONS.show_timer) {
                    case 0:
                        return 'Hide';
                    case 1:
                        return 'Show';
                    default:
                        return 'Show';
                }
            },
            getSortType: function () {
                switch (this.$parent.OPTIONS.sort_by) {
                    case 0:
                        return 'Name';
                    case 1:
                        return 'Checks';
                    case 2:
                        return '%';
                    case 3:
                        return 'Total';
                    case 4:
                        return 'Remaining';
                    case 5:
                        return '% left';
                    case 6:
                        return 'Activity';
                    case 7:
                        return 'Game';
                    default:
                        return 'Name';
                }
            },
            changeShowDone: function () {
                this.$parent.OPTIONS.show_done = this.$parent.OPTIONS.show_done + 1;
                if (this.$parent.OPTIONS.show_done > 1)
                    this.$parent.OPTIONS.show_done = 0;
            },
            changeShowTimer: function () {
                this.$parent.OPTIONS.show_timer = this.$parent.OPTIONS.show_timer + 1;
                if (this.$parent.OPTIONS.show_timer > 1)
                    this.$parent.OPTIONS.show_timer = 0;
            },
            changeShowSlotNumber: function () {
                this.$parent.OPTIONS.show_slot_number = this.$parent.OPTIONS.show_slot_number + 1;
                if (this.$parent.OPTIONS.show_slot_number > 1)
                    this.$parent.OPTIONS.show_slot_number = 0;
            },
            changeShowChecksLefts: function () {
                this.$parent.OPTIONS.show_checks_left = this.$parent.OPTIONS.show_checks_left + 1;
                if (this.$parent.OPTIONS.show_checks_left > 1)
                    this.$parent.OPTIONS.show_checks_left = 0;
            },
            changeSize: function () {
                this.$parent.OPTIONS.row_size = this.$parent.OPTIONS.row_size + 1;
                if (this.$parent.OPTIONS.row_size > 2)
                    this.$parent.OPTIONS.row_size = 0;
            },
            changeSortBy: function (num) {
                this.$parent.OPTIONS.sort_by = num;
                if (this.$parent.OPTIONS.sort_by > 7 || this.$parent.OPTIONS.sort_by < 0)
                    this.$parent.OPTIONS.sort_by = 0;

                // We do a first sort by ID here in order to have the closest sorting results used by archipelago.gg
                this.$parent.GLOBAL_TRACKER_DATA.players.sort((a, b) => a.id - b.id);
            },
            getSize: function () {
                switch (this.$parent.OPTIONS.row_size) {
                    case 0:
                        return 'S';
                    case 1:
                        return 'M';
                    case 2:
                        return 'L';
                    default:
                        return 'S';
                }
            }

        },
        components: {
        }
    }
</script>
