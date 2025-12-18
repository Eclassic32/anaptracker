<template>
    <div class="flex flex-col bg-gray-500 max-w-50vh">
        <div class=" divide-solid divide-gray-900">
            <PlayerSlot v-for="(element, index) in room.players"
                        :key="'owel-' + index"
                        v-bind:index="index"
                        v-bind:player_name="room.players[index][0]"
                        v-bind:player_game="room.players[index][1]"
                        v-bind:checks_done="0"
                        v-bind:total_checks="0"
                        v-bind:gamedata="gamedata"
                        v-bind:data="data">
            </PlayerSlot>
        </div>
        <div :class=" { 'bg-emerald-200' : get_state() > 1, 'py-2' : $parent.OPTIONS.row_size,  'text-sm py-2' : !$parent.OPTIONS.row_size  }" class="relative inline-block w-full tracker-history text-xl leading-5 font-semibold font-xl h-full px-2 border-t-2 border-t-gray-900">
            <div class="absolute left-0 top-0 bottom-0 z-1 bg-green-500" :style="{ 'width' : str_percent_completion() }"></div>
            <div class="z-2 flex flex-column justify-between">
                <div class="w-1/4 z-3 text-dark dark:text-white text-lg">

                    <span v-if="get_state() > 1" class="mr-2"><b>DONE ! Congratulations !</b></span>
                    <span v-else class="mr-2"><b>Games completed : {{ games_completed() }} / {{ total_games() }}</b></span>
                </div>
                <div class="w-1/2 z-3 text-sm">
                </div>

                <div class="w-1/4 z-3 text-right text-xl"><span v-if="!$parent.OPTIONS.row_size" class="font-normal text-tiny mr-2">({{ percent_completion() }}%)</span><b>{{ get_current_checks() }}</b> / {{ get_total_checks() }}<br /><span v-if="$parent.OPTIONS.row_size" class="font-normal text-tiny">({{ percent_completion() }}%)</span></div>
            </div>
        </div>

    </div>
</template>

<script>


    import PlayerSlot from './PlayerSlot.vue';
    export default {
        name: 'playerList',
        props: {
            data: Object,
            gamedata: Object,
            room: Object,
            static_data: Object
        },
        data: function () {
            return {
                showMenu: false,
                hide_done: true,
                done_stuff: function () {
                    if (this.$parent.removeOnCompleted)
                        return "Hidden";
                    return "Shown";
                }
            }
        },

        methods: {
            games_completed: function () {
                var res = 0;
                for (var x = 0; x < this.data.player_status.length; x++) {
                    if (this.data.player_status[x].status >= 30)
                        res++;
                }
                return res;
            },
            total_games: function () {
                return this.room.players.length;
            },
            toggleNavbar: function () {
                this.showMenu = !this.showMenu;
            },
            saveTracker: function () {
                this.$parent.saveTracker();
            },
            resetTracker: function () {
                this.$parent.resetTracker();
            },
            get_state: function () {
                if (this.get_current_checks() == this.get_total_checks()) {
                    return 2;
                }
                return 0;
            },
            get_current_checks: function () {
                var element = this.$parent.TRACKER_DATA;
                if (element.total_checks_done.length > 0) {
                    return element.total_checks_done[0].checks_done;
                }
                return 0;
            },
            get_total_checks: function () {
                var element = this.$parent.STATIC_TRACKER_DATA;
                if (element.player_locations_total) {
                    var res = 0;
                    for (var x = 0; x < element.player_locations_total.length; x++) {
                        res += element.player_locations_total[x].total_locations;
                    }
                    return res;
                }
                return 0;
            },
            percent_completion: function () {
                var total_checks = this.get_total_checks();
                if (total_checks > 0)
                    return Math.round(this.get_current_checks() * 10000 / total_checks) / 100;
                return 0;
            },
            str_percent_completion: function () {
                var total_checks = this.get_total_checks();
                if (total_checks > 0 && this.get_state() < 2)
                    return Math.floor(this.get_current_checks() * 100 / total_checks).toString() + '%';
                return 0;
            }

        },
        components: {
            PlayerSlot,
        }
    }
</script>
