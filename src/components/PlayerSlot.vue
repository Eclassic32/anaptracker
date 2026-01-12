<template>
    <div v-if="displayable()" :class=" { 'bg-emerald-200' : get_status() == 30, 'py-1' : $parent.$parent.OPTIONS.row_size == 1,  'text-sm py-1' : !$parent.$parent.OPTIONS.row_size, 'text-lg py-2' : $parent.$parent.OPTIONS.row_size == 2 }" class="relative inline-block w-full tracker-history leading-5 font-semibold font-xl h-full px-2 border-t-2 border-t-gray-900">
        <div class="absolute left-0 top-0 bottom-0 z-1 bg-green-500" :style="{ 'width' : str_percent_completion() }"></div>

        <div @click="toggleExpand()" class="z-2 flex flex-column justify-between">
            <div class="w-1/4 lg:w-1/5 2xl:w-1/6 z-3 text-dark " :class="{ 'opacity-50' : get_status() == 0 }"><span v-if="$parent.$parent.OPTIONS.show_slot_number" class="font-bold">{{ data.id }} - </span><span class="mr-2 font-bold">{{ player_name }}</span><br v-if="$parent.$parent.OPTIONS.row_size" /><span class="font-normal text-tiny">({{ player_game }})</span></div>
            <div class="w-auto z-3 text-sm">
                <div class="clear-both text-center font-normal">


                    <div v-if="getImportantSentHints()" :class="getImageClass()" class="inline-block bg-red-400/70 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
                        <div v-if="get_size()" class="text-xs font-normal text-left">Hints</div>

                        <span v-if="getImportantSentHints() > 5" class="mr-2 text-xs font-bold"><img title="Sent Hints" src="/img/event.png" />x{{ getImportantSentHints() }} </span>
                        <span v-else class="text-xs font-bold">
                            <img v-if="getImportantSentHints() > 4" title="Sent Hints" src="/img/event.png" />
                            <img v-if="getImportantSentHints() > 3" title="Sent Hints" src="/img/event.png" />
                            <img v-if="getImportantSentHints() > 2" title="Sent Hints" src="/img/event.png" />
                            <img v-if="getImportantSentHints() > 1" title="Sent Hints" src="/img/event.png" />
                            <img title="Sent Hints" src="/img/event.png" />
                        </span>
                    </div>
                    <div v-if="getImportantRecievedHints()" :class="getImageClass()" class="inline-block bg-blue-400/70 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
                        <div v-if="get_size()" class="text-xs font-normal text-left">Hints</div>

                        <span v-if="getImportantRecievedHints() > 5" class="mr-2 text-xs font-bold"><img title="Recieved Hints" src="/img/unknown.png" />x{{ getImportantRecievedHints() }} </span>
                        <span v-else class="text-xs font-bold">
                            <img v-if="getImportantRecievedHints() > 4" title="Recieved Hints" src="/img/unknown.png" />
                            <img v-if="getImportantRecievedHints() > 3" title="Recieved Hints" src="/img/unknown.png" />
                            <img v-if="getImportantRecievedHints() > 2" title="Recieved Hints" src="/img/unknown.png" />
                            <img v-if="getImportantRecievedHints() > 1" title="Recieved Hints" src="/img/unknown.png" />
                            <img title="Recieved Hints" src="/img/unknown.png" />
                        </span>
                    </div>

                    <component :is="get_game_data_class()"
                               v-bind:data="data"
                               v-bind:index="index"
                               v-bind:gamedata="get_game_data()" />
                </div>
            </div>

            <div class="w-1/4 lg:w-1/5 2xl:w-1/6 z-3 text-right">
                <span v-if="$parent.$parent.OPTIONS.show_timer" class="font-bold
                      text-tiny mr-3">{{ get_last_activity() }}</span><span v-if="!$parent.$parent.OPTIONS.row_size" class="font-normal text-tiny mr-2">({{ percent_completion() }}%)</span><span class="font-bold">{{ get_current_checks() }}</span> / {{ get_total_checks() }}<br /><span v-if="$parent.$parent.OPTIONS.row_size" class="font-normal text-tiny">({{ percent_completion() }}%)</span>
            </div>
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
            getImageClass: function () {
                if (this.$parent.$parent.OPTIONS.row_size == 2) {
                    return 'iconbar-L my-1';
                }
                else if (this.$parent.$parent.OPTIONS.row_size == 1) {
                    return 'iconbar-M';
                }
                return 'iconbar-S';
            },
            getNumberItemsFromName: function (name) {
                var res = 0;
                var game_data = this.get_game_data();
                if (game_data && game_data.item_name_to_id) {
                    var id = game_data.item_name_to_id[name];
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (this.data.tracker_data.player_items_received[x][0] == id)
                            res++;
                    }
                }
                return res;
            },
            getNumberItemsFromGroup: function (names) {
                var res = 0;
                var game_data = this.get_game_data();
                if (game_data && game_data.item_name_to_id) {
                    var bottle_array = []
                    for (var x = 0; x < names.length; x++) {
                        bottle_array.push(game_data.item_name_to_id[names[x]]);
                    }
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (bottle_array.includes(this.data.tracker_data.player_items_received[x][0]))
                            res++;
                    }
                }
                return res;
            },
            getNumberItemsFromCategory: function (name) {
                var res = 0;
                var game_data = this.get_game_data();
                if (game_data && game_data.item_name_groups) {

                    var group = game_data.item_name_groups[name];
                    var list_of_ids = [];
                    for (var x = 0; x < group.length; x++) {
                        list_of_ids.push(game_data.item_name_to_id[group[x]]);
                    }
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (list_of_ids.includes(this.data.tracker_data.player_items_received[x][0]))
                            res++;
                    }
                }
                return res;
            },
            getNumberItemsNameStart: function (name) {
                var res = 0;
                var game_data = this.get_game_data();
                if (game_data && game_data.location_name_to_id) {
                    var bottle_array = [];
                    for (var key in game_data.item_name_to_id) {
                        if (key.startsWith(name)) {
                            bottle_array.push(game_data.item_name_to_id[key]);
                        }
                    }
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (bottle_array.includes(this.data.tracker_data.player_items_received[x][0]))
                            res++;
                    }
                }
                return res;
            },
            displayable: function () {
                if ((this.$parent.$parent.OPTIONS.show_done || this.get_time_diff() < (600)) || this.data.tracker_data.status < 30) {
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
            get_size: function () {
                return this.$parent.$parent.OPTIONS.row_size;
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
                    return (Math.floor(this.get_current_checks() * 10000 / total_checks) / 100).toString() + '%';
                return 0;
            },
            get_time_diff: function () {
                if (this.data.tracker_data.activity_timer != '') {
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
            },
            toggleExpand: function () {
                if (this.data.extended) {
                    this.data.extended = 0;
                }
                else {
                    this.data.extended = 1;
                }
            },
            /**
             * 0 : Player who send the hint
             * 1 : Player whi recieve the hint
             * 2 : Location
             * 3 : Item
             * 4 : found ?
             * 5 : Entrance Label
             * 6 : Item classification
             * 7 : Hint classification (Avoid, Non-important, Important, Found)
             * 
             */
            getImportantSentHints: function (name) {
                var res = 0;
                for (var x = 0; x < this.data.tracker_data.hints.length; x++) {
                    if (this.data.tracker_data.hints[x][1] == this.data.id && this.data.tracker_data.hints[x][6] == 2 && this.data.tracker_data.hints[x][4] == false)
                        res++;
                }
                return res;
            },
            getImportantRecievedHints: function (name) {
                var res = 0;
                for (var x = 0; x < this.data.tracker_data.hints.length; x++) {
                    if (this.data.tracker_data.hints[x][0] == this.data.id && this.data.tracker_data.hints[x][6] == 2 && this.data.tracker_data.hints[x][4] == false)
                        res++;
                }
                return res;
            },
        },
        components: {
            GData
  },
};
</script>
