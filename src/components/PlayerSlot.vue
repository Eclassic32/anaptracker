<template>
    <div v-if="displayable()" :class=" { 'bg-emerald-200' : get_status() == 30, 'py-2' : $parent.$parent.OPTIONS.row_size,  'text-sm py-1' : !$parent.$parent.OPTIONS.row_size  }" class="relative inline-block w-full tracker-history text-lg leading-5 font-semibold font-xl h-full px-2 border-t-2 border-t-gray-900"
          >
        <div class="absolute left-0 top-0 bottom-0 z-1 bg-green-500" :style="{ 'width' : str_percent_completion() }"></div>
        <div class="z-2 flex flex-column justify-between">
            <div class="w-1/4 z-3 text-dark" :class="{ 'opacity-50' : get_status() == 0 }"><span class="mr-2 font-bold">{{ player_name }}</span><br v-if="$parent.$parent.OPTIONS.row_size" /><span class="font-normal text-tiny">({{ player_game }})</span></div>
            <div class="w-1/2 z-3 text-sm">
                <div class="clear-both text-center">
                    <component :is="get_game_data_class()"
                               v-bind:data="data"
                               v-bind:index="index"
                               v-bind:gamedata="get_game_data()" />
                </div>
            </div>
            
            <div class="w-1/4 z-3 text-right">
                <span v-if="$parent.$parent.OPTIONS.show_timer" class="font-bold
                      text-tiny mr-3">{{ get_last_activity() }}</span><span v-if="!$parent.$parent.OPTIONS.row_size" class="font-normal text-tiny mr-2">({{ percent_completion() }}%)</span><span class="font-bold">{{ get_current_checks() }}</span> / {{ get_total_checks() }}<br /><span v-if="$parent.$parent.OPTIONS.row_size" class="font-normal text-tiny">({{ percent_completion() }}%)</span></div>
        </div>
    </div>
</template>

<script>

    import GData from './gamedata/GData.vue';
    import { markRaw } from 'vue'
    import LIST_OF_GAMES from "../listofgames.js";
    
    
export default {
  name: "playerSlot",
        props: {
            data: Object,
            gamedata: Object,
            index: Number,
            checks_done: Number,
            total_checks: Number,
            player_name: String,
            player_game: String
  },
  data: function () {
      return {
          LIST_OF_GAMES,
          compVar: markRaw(GData),
    };
  },

        methods: {
            displayable: function () {
                if ((this.$parent.$parent.OPTIONS.show_done || this.get_time_diff() < (600)) || this.$parent.$parent.TRACKER_DATA.player_status[this.index] && this.$parent.$parent.TRACKER_DATA.player_status[this.index].status < 30) {
                    return true;
                }
                return false;
            },
            get_game_data_class: function () {
                for (var x = 0; x < this.LIST_OF_GAMES.length; x++) {
                    if (this.LIST_OF_GAMES[x].name == this.player_game) {
                        return this.LIST_OF_GAMES[x].class;
                    }
                }
                
                return GData;
            },
            get_game_data: function () {
                if (this.player_game) {
                    return this.gamedata[this.player_game];
                }
                return null;
            },
            get_status: function () {
                // On reprend le statut du joueur ?
                //
                // 0 - Online
                // 1 - Playing
                // 5 - Offline
                // 30 - Game Completed
                if (this.data.tracker_data.status >= 30)
                    return 30;
                return this.data.tracker_data.status;
            },
            get_current_checks: function () {
                return this.data.tracker_data.player_checks_done.length;
            },
            get_total_checks: function () {
                return this.data.total_locations;
            },
            percent_completion: function () {
                var total_checks = this.get_total_checks();
                if (total_checks > 0)
                    return Math.round(this.get_current_checks() * 10000 / total_checks) / 100;
                return 0;
            },
            str_percent_completion: function () {
                var total_checks = this.get_total_checks();
                if (total_checks > 0 && this.get_status() < 30)
                    return Math.floor(this.get_current_checks() * 100 / total_checks).toString() + '%';
                return 0;
            },
            get_time_diff: function () {
                if (this.data.tracker_data.activity_timer) {
                    var date_now = Date.now();
                    var date_act = new Date(this.data.tracker_data.activity_timer).getTime();
                    return Math.floor((date_now - date_act) / 1000);

                }
                return 0;
            },
            get_last_activity: function () {
                var time = this.get_time_diff();

                if (time > 3600 * 24) {
                    return (Math.floor(time / (360 * 24)) / 10).toString() + 'D';
                }
                else if (time > 3600) {
                    return (Math.floor(time / (360)) / 10).toString() + 'H';
                }
                else if (time > 900) {
                        return (Math.floor(time / (60))).toString() + 'm';
                }

                return '';
            }
        },
        components: {
            GData
  },
};
</script>
