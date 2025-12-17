<template>
    <span v-if="getNumberItemsFromName('Dream_Nail')">Nail </span>
    <span v-if="getNumberItemsFromName('Shade_Cloak')">Cloak </span>
    <span v-if="getNumberItemsFromName('Mantis_Claw')">Claw </span>
    <span v-if="getNumberItemsFromName('Crystal_Dash')">Dash </span>
    <span v-if="getNumberItemsFromName('Monarch_Wings')">Wings </span>
    <span v-if="getNumberItemsFromName('Dreamer')">D x{{ getNumberItemsFromName('Dreamer') }}</span>
</template>
    
<script>

export default {
  name: "gDataHollowKnight",
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
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.data && this.data.player_items_received && this.gamedata && this.gamedata.location_name_to_id) {

                    var id = this.gamedata.item_name_to_id[name];
                    //console.log(this.gamedata.item_name_to_id);
                    //console.log(this.data.player_items_received);
                    for (var x = 0; x < this.data.player_items_received[this.index].items.length; x++) {
                        //console.log(this.data.player_items_received[this.index].items[x])
                        if (this.data.player_items_received[this.index].items[x][0] == id)
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
