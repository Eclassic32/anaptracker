<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span class="mr-2 text-xs" :class="{ 'opacity-25': !getNumberItemsFromName('Time Piece')  }"><img src="/img/a_hat_in_time/items/time_piece.png" />x{{ getNumberItemsFromName('Time Piece') }} </span>
            <span class="mr-2" />
            <img src="/img/a_hat_in_time/items/hookshot_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hookshot Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Hats</div>

            <img src="/img/a_hat_in_time/items/sprint_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sprint Hat')  }" />
            <img src="/img/a_hat_in_time/items/brewer_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Brewing Hat')  }" />
            <img src="/img/a_hat_in_time/items/ice_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Hat')  }" />
            <img src="/img/a_hat_in_time/items/time_stop_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Time Stop Hat')  }" />
        </div>
    </div>
</template>
    
<script>

export default {
  name: "gDataAHatInTime",
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
    };
  },

        methods: {
            getImageClass: function () {
                if (this.$parent.$parent.$parent.OPTIONS.row_size) {
                    return 'iconbar-L my-1';
                }
                return 'iconbar-S';
            },
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id) {

                    var id = this.gamedata.item_name_to_id[name];
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (this.data.tracker_data.player_items_received[x][0] == id)
                            res++;
                    }
                }
                return res;
            }
        },
  components: {
  },
};
</script>
