<template>
    <div>
        <nav class="flex flex-row items-center justify-left flex-nowrap bg-gray-900 p-3">
            <div class="mr-6">
                <a class="text-gray-200">
                    <span class="font-semibold text-l tracking-tight" v-on:click="toggleNavbar()">ANAP Tracker</span>
                </a>

                <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="w-20 w-auto bg-gray-600 text-base z-50 float-left list-none text-left rounded shadow-lg mt-1 absolute mt-4" style="min-width:12rem">
                    
                </div>
            </div>
            <div class="relative mr-6 cursor-pointer hover:text-white">
                <a v-on:click="changeSize()" class="mr-5">Size {{ getSize() }}</a>
                <a v-on:click="changeShowDone()">{{ getShowDone() }} Done</a>
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
            changeShowDone: function () {
                this.$parent.OPTIONS.show_done = this.$parent.OPTIONS.show_done + 1;
                if (this.$parent.OPTIONS.show_done > 1)
                    this.$parent.OPTIONS.show_done = 0;
            },
            changeSize: function () {
                this.$parent.OPTIONS.row_size = this.$parent.OPTIONS.row_size + 1;
                if (this.$parent.OPTIONS.row_size > 1)
                    this.$parent.OPTIONS.row_size = 0;
            },
            getSize: function () {
                switch (this.$parent.OPTIONS.row_size) {
                    case 0:
                        return 'M';
                    case 1:
                        return 'L';
                    default:
                        return 'M';
                }
            }

        },
        components: {
        }
    }
</script>
