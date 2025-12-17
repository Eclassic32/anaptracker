<template>
    <div v-if="displayable()" :style="{ 'background-color' : get_color() }" class="relative inline-block w-full tracker-history text-lg leading-5 font-semibold font-xl h-full p-2 border-t-2 border-t-gray-900"
          >
        <div class="absolute left-0 top-0 bottom-0 z-1" :style="{ 'width' : str_percent_completion(), 'background-color' : '#44BB44' }"></div>
        <div class="z-2 flex flex-column justify-between">
            <div class="w-1/4 z-3 text-dark dark:text-white">{{ player_name }} <span class="font-normal text-xs">({{ player_game }})</span></div>
            <div class="w-1/2 z-3 text-sm">
                <div class="clear-both text-center">
                    <component :is="get_game_data_class()"
                               v-bind:data="data"
                               v-bind:index="index"
                               v-bind:gamedata="get_game_data()" />
                </div>
            </div>
            
            <div class="w-1/4 z-3 text-right">{{ get_current_checks() }} / {{ get_total_checks() }}</div>
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
            get_color: function () {
                var element = this.$parent.$parent.TRACKER_DATA;
                if (element.player_status[this.index] && element.player_status[this.index].status >= 30) {
                    return '#A0FFA0';
                }
                return '#818181';
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
                    return this.get_current_checks() * 100 / total_checks;
                return 0;
            },
            str_percent_completion: function () {
                var total_checks = this.get_total_checks();
                if (total_checks > 0 && this.get_color() != '#A0FFA0')
                    return Math.floor(this.get_current_checks() * 100 / total_checks).toString() + '%';
                return 0;
            }
        },
        components: {
            GData
  },
};
</script>
