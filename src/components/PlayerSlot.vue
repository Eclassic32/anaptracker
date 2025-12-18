<template>
    <div v-if="displayable()" :class=" { 'bg-emerald-200' : get_status() == 30, 'py-2' : $parent.$parent.OPTIONS.row_size,  'text-sm py-2' : !$parent.$parent.OPTIONS.row_size  }" class="relative inline-block w-full tracker-history text-lg leading-5 font-semibold font-xl h-full px-2 border-t-2 border-t-gray-900"
          >
        <div class="absolute left-0 top-0 bottom-0 z-1 bg-green-500" :style="{ 'width' : str_percent_completion() }"></div>
        <div class="z-2 flex flex-column justify-between">
            <div class="w-1/4 z-3 text-dark dark:text-white" :class="{ 'opacity-50' : get_status() == 0 }"><span class="mr-2"><b>{{ player_name }}</b></span><br v-if="$parent.$parent.OPTIONS.row_size" /><span class="font-normal text-tiny">({{ player_game }})</span></div>
            <div class="w-1/2 z-3 text-sm">
                <div class="clear-both text-center">
                    <component :is="get_game_data_class()"
                               v-bind:data="data"
                               v-bind:index="index"
                               v-bind:gamedata="get_game_data()" />
                </div>
            </div>
            
            <div class="w-1/4 z-3 text-right"><span v-if="!$parent.$parent.OPTIONS.row_size" class="font-normal text-tiny mr-2">({{ percent_completion() }}%)</span><b>{{ get_current_checks() }}</b> / {{ get_total_checks() }}<br /><span v-if="$parent.$parent.OPTIONS.row_size" class="font-normal text-tiny">({{ percent_completion() }}%)</span></div>
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
                if (this.$parent.$parent.OPTIONS.show_done || this.$parent.$parent.TRACKER_DATA.player_status[this.index] && this.$parent.$parent.TRACKER_DATA.player_status[this.index].status < 30) {
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
                var element = this.$parent.$parent.TRACKER_DATA;
                if (element.player_status[this.index]) {
                    if (element.player_status[this.index].status >= 30)
                        return 30;
                    return element.player_status[this.index].status;
                }
                return 0;
            },
            get_current_checks: function () {
                var element = this.$parent.$parent.TRACKER_DATA;
                if (element.player_checks_done[this.index]) {
                    return element.player_checks_done[this.index].locations.length;
                }
                return 0;
            },
            get_total_checks: function () {
                var element = this.$parent.$parent.STATIC_TRACKER_DATA;
                if (element.player_locations_total[this.index]) {
                    return element.player_locations_total[this.index].total_locations;
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
                if (total_checks > 0 && this.get_status() < 30)
                    return Math.floor(this.get_current_checks() * 100 / total_checks).toString() + '%';
                return 0;
            }
        },
        components: {
            GData
  },
};
</script>
