<template>
    <div class="flex flex-col bg-gray-500 max-w-50vh">
        <div class="mr-6">
            <span class="font-semibold text-l tracking-tight ml-2">Player List</span>
        </div>
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
        {{ games_completed() }} / {{ total_games() }}
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
            }

        },
        components: {
            PlayerSlot,
        }
    }
</script>
