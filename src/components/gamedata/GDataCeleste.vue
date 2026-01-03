<template>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

        <span v-if="getGoalStrawberries()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span> / {{ getGoalStrawberries() }}</span>
        <span v-else class="mr-2 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span>

    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Abilities</div>

        <img src="/img/celeste/misc/dash_refill.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Refills')  }" />
        <img src="/img/celeste/misc/double_refill.png" :class="{ 'opacity-25': !getNumberItemsFromName('Double Dash Refills')  }" />
        <img src="/img/celeste/misc/spring.png" :class="{ 'opacity-25': !getNumberItemsFromName('Springs')  }" />
        <img src="/img/celeste/misc/blue_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Boosters')  }" />
        <img src="/img/celeste/misc/red_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Red Boosters')  }" />
        <img src="/img/celeste/misc/badeline_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Badeline Boosters')  }" />
        <img src="/img/celeste/misc/bumper.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bumpers')  }" />
        <img src="/img/celeste/misc/dash_switch.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Switches')  }" />
        <img src="/img/celeste/misc/coin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Coins')  }" />
        <img src="/img/celeste/misc/feather.png" :class="{ 'opacity-25': !getNumberItemsFromName('Feathers')  }" />
        <img src="/img/celeste/misc/seeker.png" :class="{ 'opacity-25': !getNumberItemsFromName('Seekers')  }" />
    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Blocks</div>
        <img src="/img/celeste/misc/cassette_b_blue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Cassette Blocks')  }" />
        <img src="/img/celeste/misc/cassette_b_green.png" :class="{ 'opacity-25': !getNumberItemsFromName('Green Cassette Blocks')  }" />
        <img src="/img/celeste/misc/cassette_b_pink.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pink Cassette Blocks')  }" />
        <img src="/img/celeste/misc/cassette_b_yellow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Yellow Cassette Blocks')  }" />
        <span class="mr-2"></span>
        <img src="/img/celeste/misc/traffic_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Traffic Blocks')  }" />
        <img src="/img/celeste/misc/blue_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Blocks')  }" />
        <img src="/img/celeste/misc/move_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Move Blocks')  }" />
        <img src="/img/celeste/misc/swap_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Swap Blocks')  }" />
        <img src="/img/celeste/misc/pink_clouds.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pink Clouds')  }" />
        <img src="/img/celeste/misc/dream_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dream Blocks')  }" />
    </div>
</template>
    
<script>

    /**
    * Celeste (Open World)
    *
    * Goal is to complete the goal area
    * It can be :
    *   - The Summit (A, B or C)
    *   - Core (A, B or C)
    *   - Empty Space
    *   - Farewell (Vanilla or Golden)
    * Strawberries are usually required to beat that area.
    * 
    */
export default {
  name: "gDataCeleste",
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
                if (this.$parent.$parent.$parent.OPTIONS.row_size == 2) {
                    return 'iconbar-L my-1';
                }
                else if (this.$parent.$parent.$parent.OPTIONS.row_size == 1) {
                    return 'iconbar-M';
                }
                return 'iconbar-S';
            },
            getGoalStrawberries: function () {
                if (this.data.slot_data.strawberries_required) {
                    return this.data.slot_data.strawberries_required;
                }
                return 0;
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
