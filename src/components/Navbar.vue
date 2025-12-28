<template>
    <div>
        <nav class="flex flex-row flex-nowrap bg-gray-900 p-3">
            <div class="mr-6">
                <a>
                    <span class="font-semibold text-l tracking-tight" v-on:click="toggleNavbar()">ANAP Tracker</span>
                </a>

                <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="w-20 w-auto bg-gray-600 text-base z-50 float-left list-none text-left rounded shadow-lg mt-1 absolute mt-4" style="min-width:12rem">

                </div>
            </div>
            <div v-if="$parent.validRoom()" v-on:click="changeSize()" class="text-green-600 relative mr-6 cursor-pointer hover:text-white">
                <span>Size {{ getSize() }}</span>
            </div>
            <div v-if="$parent.validRoom()" v-on:click="changeShowDone()" class="text-green-600 relative mr-6 cursor-pointer hover:text-white">
                <span>{{ getShowDone() }} Done</span>
            </div>
            <div v-if="$parent.validRoom()" v-on:click="changeShowTimer()" class="text-green-600 relative mr-6 cursor-pointer hover:text-white">
                <span>{{ getShowTimer() }} Timers</span>
            </div>
            <div v-if="$parent.validRoom()" v-on:click="changeSortBy()" class="text-green-600 relative mr-6 cursor-pointer hover:text-white">
                <span>Sort : {{ getSortType() }}</span>
            </div>
            <div class="text-green-600 relative mr-6 justify-self-end font-roboto">
                <span>v0.2.0</span>
            </div>
        </nav>
    </div>
</template>

<script>


    export default {
        name: 'navbar',
        props: {
            data: Object,
        },
        data: function () {
            return {
        
                showMenu: false,
            }
        },

        methods: {
            closeNavbar: function () {
                this.showMenu = false;
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
            changeSize: function () {
                this.$parent.OPTIONS.row_size = this.$parent.OPTIONS.row_size + 1;
                if (this.$parent.OPTIONS.row_size > 1)
                    this.$parent.OPTIONS.row_size = 0;
            },
            changeSortBy: function () {
                this.$parent.OPTIONS.sort_by = this.$parent.OPTIONS.sort_by + 1;
                if (this.$parent.OPTIONS.sort_by > 3)
                    this.$parent.OPTIONS.sort_by = 0;
            },
            getSize: function () {
                switch (this.$parent.OPTIONS.row_size) {
                    case 0:
                        return 'S';
                    case 1:
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
